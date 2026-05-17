import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { PaymentService } from '../../core/services/payment.service';
import { LocationService, Country, LocationNode } from '../../core/services/location.service';
import { User } from '../../core/models/user';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  user: User | null = null;
  countries: Country[] = [];
  selectedCountry: Country | null = null;
  
  divisions: LocationNode[] = [];
  districts: LocationNode[] = [];
  thanas: LocationNode[] = [];
  
  selectedDivision: string = '';
  selectedDistrict: string = '';
  selectedThana: string = '';
  
  phoneNumber: string = '';
  village: string = '';
  
  loading = false;
  isEditMode = false;
  currentPlan: string | null = null;

  constructor(
    private authService: AuthService,
    private locationService: LocationService,
    private paymentService: PaymentService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.user = this.authService.currentUser ? { ...this.authService.currentUser } : null;
    this.countries = this.locationService.getCountries();
    
    // Initial setup
    if (this.user) {
      this.parseUserAddress();
      this.loadUserSubscription();
    } else {
      this.selectedCountry = this.countries.find(c => c.name === 'Bangladesh') || this.countries[0];
    }

    this.loadHierarchy();
  }

  parseUserAddress() {
    if (!this.user) return;
    
    if (this.user.phone) {
      const parts = this.user.phone.split(' ');
      if (parts.length > 1) {
        this.selectedCountry = this.countries.find(c => c.code === parts[0]) || null;
        this.phoneNumber = parts.slice(1).join(' ');
      }
    }

    if (this.user.division) {
      this.selectedDivision = this.user.division;
    }
    if (this.user.district) {
      this.selectedDistrict = this.user.district;
    }
    if (this.user.policeStation) {
      this.selectedThana = this.user.policeStation;
    }

    if (this.user.address) {
      const parts = this.user.address.split(', ');
      // Try to map back from saved address parts for village and country
      if (parts.length >= 2) {
        this.village = parts[0];
        this.selectedCountry = this.countries.find(c => c.name === parts[parts.length - 1]) || this.selectedCountry;
      }
    }
  }

  loadUserSubscription() {
    if (!this.user) return;
    this.paymentService.getPayments().subscribe(payments => {
      const userPayments = payments
        .filter(p => p.clientId === this.user!.id && (p.status === 'PAID' || p.status === 'PENDING'))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
      if (userPayments.length > 0) {
        this.currentPlan = userPayments[0].item;
      }
    });
  }

  loadHierarchy() {
    this.locationService.getHierarchy(this.selectedCountry?.name || '').subscribe(data => {
      this.divisions = data;
      // Re-trigger cascade if we have initial values
      if (this.selectedDivision) this.onDivisionChange();
    });
  }

  onCountryChange() {
    this.selectedDivision = '';
    this.selectedDistrict = '';
    this.selectedThana = '';
    this.loadHierarchy();
  }

  onDivisionChange() {
    const division = this.divisions.find(d => d.name === this.selectedDivision);
    this.districts = division ? (division.children || []) : [];
    if (this.selectedDistrict && !this.districts.find(d => d.name === this.selectedDistrict)) {
      this.selectedDistrict = '';
    }
    if (this.selectedDistrict) this.onDistrictChange();
    else this.thanas = [];
  }

  onDistrictChange() {
    const district = this.districts.find(d => d.name === this.selectedDistrict);
    this.thanas = district ? (district.children || []) : [];
    if (this.selectedThana && !this.thanas.find(t => t.name === this.selectedThana)) {
      this.selectedThana = '';
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Basic size validation (5MB max before compression)
      if (file.size > 5 * 1024 * 1024) {
        this.toastService.error('File is too large. Max 5MB allowed.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          // Constrain to maximum 400px while maintaining aspect ratio
          const MAX_SIZE = 400;
          if (width > height) {
            if (width > MAX_SIZE) {
              height *= MAX_SIZE / width;
              width = MAX_SIZE;
            }
          } else {
            if (height > MAX_SIZE) {
              width *= MAX_SIZE / height;
              height = MAX_SIZE;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          
          // Convert to JPEG with 0.7 compression to significantly reduce Base64 size
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
          if (this.user) {
            this.user.avatar = compressedBase64;
            this.toastService.info('New photo selected. Don\'t forget to save changes!');
          }
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  saveProfile() {
    if (!this.user) return;
    this.loading = true;

    const parts = [
      this.village,
      this.selectedCountry?.name
    ].filter(p => !!p);
    
    this.user.address = parts.join(', ');
    this.user.division = this.selectedDivision;
    this.user.district = this.selectedDistrict;
    this.user.policeStation = this.selectedThana;
    this.user.phone = `${this.selectedCountry?.code} ${this.phoneNumber}`;
    
    this.authService.updateProfile(this.user).subscribe({
      next: () => {
        this.loading = false;
        this.isEditMode = false;
        this.toastService.success('Profile updated successfully!');
      },
      error: () => {
        this.loading = false;
        this.toastService.error('Error updating profile.');
      }
    });
  }

  toggleEdit() {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode) {
      // Reset user copy to original if cancelling
      this.user = this.authService.currentUser ? { ...this.authService.currentUser } : null;
      this.parseUserAddress();
    }
  }
}

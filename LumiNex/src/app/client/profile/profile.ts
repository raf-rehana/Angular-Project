import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.services';
import { LocationService, Country, LocationNode } from '../../core/services/location.service';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  user: User | null = null;
  countries: Country[] = [];
  selectedCountry: Country | null = null;
  
  districts: LocationNode[] = [];
  thanas: LocationNode[] = [];
  
  selectedDistrict: string = '';
  selectedThana: string = '';
  
  phoneNumber: string = '';
  village: string = '';
  
  loading = false;

  constructor(
    private authService: AuthService,
    private locationService: LocationService
  ) {}

  ngOnInit() {
    this.user = this.authService.currentUser ? { ...this.authService.currentUser } : null;
    this.countries = this.locationService.getCountries();
    
    // Initial setup
    if (this.user) {
      this.parseUserAddress();
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

    if (this.user.address) {
      const parts = this.user.address.split(', ');
      // Try to map back from saved address parts
      if (parts.length >= 4) {
        this.village = parts[0];
        this.selectedThana = parts[1];
        this.selectedDistrict = parts[2];
        this.selectedCountry = this.countries.find(c => c.name === parts[parts.length - 1]) || this.selectedCountry;
      }
    }
  }

  loadHierarchy() {
    this.locationService.getFlattenedHierarchy(this.selectedCountry?.name || '').subscribe(data => {
      this.districts = data;
      // Re-trigger cascade if we have initial values
      if (this.selectedDistrict) this.onDistrictChange();
    });
  }

  onCountryChange() {
    this.selectedDistrict = '';
    this.selectedThana = '';
    this.loadHierarchy();
  }

  onDistrictChange() {
    const district = this.districts.find(d => d.name === this.selectedDistrict);
    this.thanas = district ? (district.children || []) : [];
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (this.user) this.user.avatar = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  saveProfile() {
    if (!this.user) return;
    this.loading = true;

    const parts = [
      this.village,
      this.selectedThana,
      this.selectedDistrict,
      this.selectedCountry?.name
    ].filter(p => !!p);
    
    this.user.address = parts.join(', ');
    this.user.phone = `${this.selectedCountry?.code} ${this.phoneNumber}`;
    
    this.authService.updateProfile(this.user).subscribe({
      next: () => {
        this.loading = false;
        alert('Profile updated successfully!');
      },
      error: () => {
        this.loading = false;
        alert('Error updating profile.');
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { LocationService, Country, LocationNode } from '../../core/services/location.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  error = '';
  success = false;
  showPassword = false;
  currentStep = 1;

  divisions: LocationNode[] = [];
  countries: Country[] = [];
  districts: LocationNode[] = [];
  thanas: LocationNode[] = [];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private locationService: LocationService
  ) {
    this.form = this.fb.group({
      companyName:  ['', Validators.required],
      businessType: ['', Validators.required],
      country:      ['Bangladesh', Validators.required],
      division:     [''],
      district:     [''],
      thana:        [''],
      village:      ['', Validators.required],
      name:         ['', Validators.required],
      email:        ['', [Validators.required, Validators.email]],
      countryCode:  ['+880', Validators.required],
      phone:        ['', Validators.required],
      password:     ['', [Validators.required, Validators.minLength(6)]],
      plan:         ['STARTER']
    });
  }

  ngOnInit() {
    this.countries = this.locationService.getCountries();
    this.loadHierarchy();
  }

  loadHierarchy() {
    const countryName = this.form.get('country')?.value;
    this.locationService.getHierarchy(countryName).subscribe(data => {
      this.divisions = data;
    });
  }

  onCountryChange() {
    const countryName = this.form.get('country')?.value;
    const country = this.countries.find(c => c.name === countryName);
    if (country) {
      this.form.patchValue({ countryCode: country.code });
    }
    this.form.patchValue({ division: '', district: '', thana: '' });
    this.loadHierarchy();
  }

  onDivisionChange() {
    const divName = this.form.get('division')?.value;
    const division = this.divisions.find(d => d.name === divName);
    this.districts = division ? (division.children || []) : [];
    this.form.patchValue({ district: '', thana: '' });
    this.thanas = [];
  }

  onDistrictChange() {
    const disName = this.form.get('district')?.value;
    const district = this.districts.find(d => d.name === disName);
    this.thanas = district ? (district.children || []) : [];
    this.form.patchValue({ thana: '' });
  }

  nextStep(): void {
    if (this.currentStep === 1) {
      if (this.form.get('companyName')?.invalid || this.form.get('businessType')?.invalid) {
        this.form.get('companyName')?.markAsTouched();
        this.form.get('businessType')?.markAsTouched();
        return;
      }
      this.currentStep = 2;
    } else if (this.currentStep === 2) {
      if (this.form.get('country')?.invalid || this.form.get('village')?.invalid) {
        this.form.get('country')?.markAsTouched();
        this.form.get('village')?.markAsTouched();
        return;
      }
      this.currentStep = 3;
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) this.currentStep--;
  }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.error = '';

    const val = this.form.value;
    const parts = [val.village, val.thana, val.district, val.division, val.country].filter(p => !!p);
    const registrationData = {
      ...val,
      phone: `${val.countryCode} ${val.phone}`,
      address: parts.join(', ')
    };

    this.auth.register(registrationData).subscribe({
      next: () => {
        this.success = true;
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err) => {
        this.error = err.error?.message || 'Registration failed. Please try again.';
        this.loading = false;
      }
    });
  }
}

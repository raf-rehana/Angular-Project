import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.services';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent {
  form: FormGroup;
  loading = false;
  error = '';
  success = false;
  showPassword = false;
  currentStep = 1;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      companyName:  ['', Validators.required],
      businessType: ['', Validators.required],
      name:         ['', Validators.required],
      email:        ['', [Validators.required, Validators.email]],
      phone:        ['', Validators.required],
      password:     ['', [Validators.required, Validators.minLength(6)]],
      plan:         ['STARTER']
    });
  }

  get companyName()  { return this.form.get('companyName'); }
  get businessType() { return this.form.get('businessType'); }
  get name()         { return this.form.get('name'); }
  get email()        { return this.form.get('email'); }
  get phone()        { return this.form.get('phone'); }
  get password()     { return this.form.get('password'); }

  nextStep(): void {
    if (this.currentStep === 1) {
      if (this.companyName?.invalid || this.businessType?.invalid) {
        this.form.get('companyName')?.markAsTouched();
        this.form.get('businessType')?.markAsTouched();
        return;
      }
    }
    this.currentStep = 2;
  }

  prevStep(): void { this.currentStep = 1; }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.error = '';

    this.auth.register(this.form.value).subscribe({
      next: () => {
        this.success = true;
        setTimeout(() => this.router.navigate(['/auth/login']), 2000);
      },
      error: (err) => {
        this.error = err.error?.message || 'Registration failed. Please try again.';
        this.loading = false;
      }
    });
  }

  selectPlan(plan: string): void {
    this.form.patchValue({ plan });
  }
}
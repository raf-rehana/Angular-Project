import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.services';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  form: FormGroup;
  loading = false;
  error = '';
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email()    { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.error = '';

    this.auth.login(this.email?.value, this.password?.value).subscribe({
      next: (res) => {
        const role = res.user.role;
        if (role === 'ADMIN' || role === 'SUPER_ADMIN') this.router.navigate(['/admin']);
        else if (role === 'STAFF')  this.router.navigate(['/staff']);
        else                        this.router.navigate(['/client']);
      },
      error: (err) => {
        this.error = err.error?.message || 'Invalid email or password.';
        this.loading = false;
      }
    });
  }

  // Demo login shortcuts
  demoLogin(role: string): void {
    const demos: any = {
      client: { email: 'client@technova.com',  password: 'demo123' },
      admin:  { email: 'admin@startuphub.com', password: 'demo123' },
      staff:  { email: 'karim@startuphub.com', password: 'demo123' }
    };
    this.form.setValue(demos[role]);
  }
}
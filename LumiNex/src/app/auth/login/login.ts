import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { RedirectService } from '../../core/services/redirect.service';

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
  returnUrl: string = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private redirectService: RedirectService
  ) {
    this.form = this.fb.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }

  get email()    { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.error = '';

    const email = this.email?.value;
    const password = this.password?.value;

    this.auth.checkEmail(email).pipe(
      switchMap(exists => {
        if (!exists) {
          this.error = 'Email not found, create account first';
          this.loading = false;
          return EMPTY;
        }
        return this.auth.login(email, password);
      })
    ).subscribe({
      next: (res) => {
        const role = res.user.role;
        const storedReturnUrl = this.redirectService.getReturnUrl();
        const finalRoute = this.returnUrl || storedReturnUrl || '/client';
        
        let targetRoute = finalRoute;
        if (!this.returnUrl && !storedReturnUrl) {
          if (role === 'ADMIN' || role === 'SUPER_ADMIN') targetRoute = '/admin';
          else if (role === 'EMPLOYEE') targetRoute = '/employee';
        }

        this.router.navigateByUrl(targetRoute).then(success => {
          if (!success) {
            this.error = 'Navigation failed. Route not found.';
            this.loading = false;
          }
        }).catch(err => {
          this.error = 'Routing error: ' + err.message;
          this.loading = false;
        });
      },
      error: (err) => {
        this.error = err.error?.message || err.message || 'Invalid email or password.';
        this.loading = false;
      }
    });
  }

  // Demo login shortcuts
  demoLogin(role: string): void {
    const demos: any = {
      client: { email: 'client@luminex.com',  password: 'demo123' },
      admin:  { email: 'admin@luminex.com', password: 'demo123' },
      employee:  { email: 'employee@luminex.com', password: 'demo123' }
    };
    this.form.setValue(demos[role]);
  }
}

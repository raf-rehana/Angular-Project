import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './plans.html',
  styleUrl: './plans.css',
})
export class PlansComponent {
  config = {
    projectName: '',
    projectType: 'Web Application',
    timeline: '1-3 Months',
    budget: 'BDT 50,000 - BDT 100,000',
    targetAudience: '',
    existingBranding: 'No',
    keyFeatures: '',
    description: ''
  };

  loading = false;

  constructor(private router: Router, private toastService: ToastService) {}

  submitConfig() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.toastService.success('Project Configuration Saved! Our team will contact you with a custom quote.');
      this.router.navigate(['/client/dashboard']);
    }, 1500);
  }
}

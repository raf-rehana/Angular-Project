import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../core/services/toast.service';
import { AuthService } from '../../core/services/auth.service';
import { RequestService } from '../../core/services/request.service';
import { NotificationService } from '../../core/services/notification.service';

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

  constructor(
    private router: Router, 
    private toastService: ToastService,
    private authService: AuthService,
    private requestService: RequestService,
    private notificationService: NotificationService
  ) {}

  submitConfig() {
    const user = this.authService.currentUser;
    if (!user) {
      this.toastService.error('You must be logged in to submit a proposal.');
      return;
    }

    this.loading = true;
    const clientNotes = `Timeline: ${this.config.timeline}\n` +
                        `Budget Range: ${this.config.budget}\n` +
                        `Target Customer/Audience: ${this.config.targetAudience}\n` +
                        `Existing Branding? ${this.config.existingBranding}\n` +
                        `Description: ${this.config.description}`;

    const proposalPayload = {
      userId: user.id,
      clientEmail: user.email,
      serviceId: 'PROPOSAL',
      serviceName: this.config.projectName,
      categoryName: this.config.projectType,
      status: 'PROPOSAL_PENDING' as any,
      priority: 'NORMAL' as any,
      clientNotes: clientNotes,
      createdAt: new Date().toISOString(),
      progress: 0
    };

    this.requestService.submitRequest(proposalPayload).subscribe({
      next: (req) => {
        this.loading = false;
        
        // Notify Admins
        this.notificationService.create({
          userId: 10151,
          title: 'New Project Proposal',
          message: `A new custom project proposal "${this.config.projectName}" has been submitted by ${user.name || 'Client'}.`,
          type: 'INFO'
        }).subscribe();

        this.notificationService.create({
          userId: 10141,
          title: 'New Project Proposal',
          message: `A new custom project proposal "${this.config.projectName}" has been submitted by ${user.name || 'Client'}.`,
          type: 'INFO'
        }).subscribe();

        this.toastService.success('Project Proposal Submitted Successfully! Admin has been notified.');
        this.router.navigate(['/client/requested-projects']);
      },
      error: (err) => {
        this.loading = false;
        this.toastService.error('Failed to submit proposal. Please try again.');
        console.error(err);
      }
    });
  }

  goBack() {
    this.router.navigate(['/client/dashboard']);
  }
}

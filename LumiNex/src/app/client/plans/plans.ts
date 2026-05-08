import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './plans.html',
  styleUrl: './plans.css',
})
export class Plans {
  step = 1;
  config = {
    type: 'WEB',
    subType: 'E_COMMERCE',
    security: 'ADVANCED',
    stack: 'JAVA',
    features: [] as string[]
  };

  stacks = [
    { id: 'JAVA', name: 'Java / Spring Boot', icon: 'bi-cup-hot-fill' },
    { id: 'PYTHON', name: 'Python / Django', icon: 'bi-snake' },
    { id: 'PHP', name: 'PHP / Laravel', icon: 'bi-elephant' },
    { id: 'AI', name: 'AI Integrated (Python/Node)', icon: 'bi-cpu' }
  ];

  constructor(private router: Router) {}

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  toggleFeature(feature: string) {
    const idx = this.config.features.indexOf(feature);
    if (idx > -1) this.config.features.splice(idx, 1);
    else this.config.features.push(feature);
  }

  submitConfig() {
    alert('Project Configuration Saved! Our team will contact you with a custom quote.');
    this.router.navigate(['/client/dashboard']);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../../core/services/loading.service';

@Component({
  selector: 'app-loading-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-bar-container" *ngIf="loadingService.isLoading$ | async">
      <div class="loading-bar shadow-sm"></div>
    </div>
  `,
  styles: [`
    .loading-bar-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      z-index: 9999;
      background: rgba(255, 255, 255, 0.1);
    }
    .loading-bar {
      height: 100%;
      background: linear-gradient(90deg, #4f46e5, #818cf8, #4f46e5);
      background-size: 200% 100%;
      animation: loading 1.5s infinite linear;
    }
    @keyframes loading {
      0% { width: 0; background-position: 100% 0; }
      50% { width: 70%; }
      100% { width: 100%; background-position: 0 0; }
    }
  `]
})
export class LoadingBarComponent {
  constructor(public loadingService: LoadingService) {}
}

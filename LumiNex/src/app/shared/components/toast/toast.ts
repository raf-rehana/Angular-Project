import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, Toast } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container" aria-live="polite" aria-atomic="true">
      <div *ngFor="let toast of toasts"
           class="toast-item toast-{{ toast.type }}"
           [class.show]="true">
        <div class="d-flex align-items-center gap-3">
          <i class="bi {{ toast.icon }} toast-icon"></i>
          <span class="toast-message flex-grow-1">{{ toast.message }}</span>
          <button class="toast-close" (click)="toastService.dismiss(toast.id)">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div class="toast-progress"></div>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 380px;
    }
    .toast-item {
      display: block;
      border-radius: 14px;
      padding: 14px 18px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.18);
      animation: slideIn 0.3s ease;
      overflow: hidden;
      position: relative;
      backdrop-filter: blur(8px);
    }
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to   { transform: translateX(0);    opacity: 1; }
    }
    .toast-success { background: linear-gradient(135deg, #0f9b58 0%, #16a34a 100%); color: #fff; }
    .toast-error   { background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: #fff; }
    .toast-warning { background: linear-gradient(135deg, #d97706 0%, #b45309 100%); color: #fff; }
    .toast-info    { background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: #fff; }
    .toast-icon { font-size: 1.2rem; flex-shrink: 0; }
    .toast-message { font-size: 0.9rem; font-weight: 500; line-height: 1.4; }
    .toast-close {
      background: rgba(255,255,255,0.2);
      border: none;
      color: white;
      border-radius: 6px;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      flex-shrink: 0;
      font-size: 0.75rem;
      transition: background 0.2s;
    }
    .toast-close:hover { background: rgba(255,255,255,0.35); }
    .toast-progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background: rgba(255,255,255,0.45);
      border-radius: 0 0 14px 14px;
      animation: progress 4s linear forwards;
      width: 100%;
    }
    @keyframes progress {
      from { width: 100%; }
      to   { width: 0%; }
    }
  `]
})
export class ToastComponent implements OnInit {
  toasts: Toast[] = [];

  constructor(public toastService: ToastService) {}

  ngOnInit() {
    this.toastService.toasts$.subscribe(t => this.toasts = t);
  }
}

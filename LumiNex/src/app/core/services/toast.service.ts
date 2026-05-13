import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  icon: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private counter = 0;
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  toasts$ = this.toastsSubject.asObservable();

  private show(message: string, type: Toast['type'], icon: string) {
    const id = ++this.counter;
    const toast: Toast = { id, message, type, icon };
    const current = this.toastsSubject.value;
    this.toastsSubject.next([...current, toast]);
    setTimeout(() => this.dismiss(id), 4000);
  }

  success(message: string) { this.show(message, 'success', 'bi-check-circle-fill'); }
  error(message: string)   { this.show(message, 'error',   'bi-x-circle-fill'); }
  warning(message: string) { this.show(message, 'warning', 'bi-exclamation-triangle-fill'); }
  info(message: string)    { this.show(message, 'info',    'bi-info-circle-fill'); }

  dismiss(id: number) {
    const current = this.toastsSubject.value.filter(t => t.id !== id);
    this.toastsSubject.next(current);
  }
}

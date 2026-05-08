import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../core/services/payment';

@Component({
  selector: 'app-revenue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './revenue.html',
  styleUrl: './revenue.css',
})
export class Revenue implements OnInit {
  months = [
    { name: 'Jan', val: 65 },
    { name: 'Feb', val: 59 },
    { name: 'Mar', val: 80 },
    { name: 'Apr', val: 81 },
    { name: 'May', val: 56 },
    { name: 'Jun', val: 55 },
    { name: 'Jul', val: 40 }
  ];

  transactions: any[] = [];

  constructor(
    private paymentService: PaymentService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.paymentService.getPayments().subscribe(data => {
      this.transactions = data.slice(0, 5); // Show latest 5
      this.cdr.detectChanges();
    });
  }
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PaymentService, Payment } from '../../core/services/payment.service';

@Component({
  selector: 'app-revenue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './revenue.html',
  styleUrl: './revenue.css',
})
export class Revenue implements OnInit {
  months: { name: string, val: number }[] = [];

  transactions: Payment[] = [];

  // Dynamic stat values
  totalRevenue = 0;
  subscriptionRevenue = 0;
  serviceRevenue = 0;
  projectedRevenue = 0;

  // Subscription-related keywords to categorize
  private subscriptionKeywords = ['plan', 'subscription', 'foundation', 'accelerator', 'launchpad'];

  constructor(
    private paymentService: PaymentService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.paymentService.getPayments().subscribe(data => {
      // Latest 5 for the sidebar list
      this.transactions = data
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);

      // Calculate totals from PAID payments only
      const paid = data.filter(p => p.status === 'PAID');

      this.totalRevenue = paid.reduce((sum, p) => sum + p.amount, 0);

      this.subscriptionRevenue = paid
        .filter(p => this.subscriptionKeywords.some(k => p.item?.toLowerCase().includes(k)))
        .reduce((sum, p) => sum + p.amount, 0);

      this.serviceRevenue = paid
        .filter(p => !this.subscriptionKeywords.some(k => p.item?.toLowerCase().includes(k)))
        .reduce((sum, p) => sum + p.amount, 0);

      // Projected = total paid + 20% of pending
      const pending = data.filter(p => p.status === 'PENDING');
      const pendingTotal = pending.reduce((sum, p) => sum + p.amount, 0);
      this.projectedRevenue = this.totalRevenue + pendingTotal * 0.2;

      // Calculate monthly data
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const monthlyTotals = new Array(12).fill(0);
      
      paid.forEach(p => {
        const date = new Date(p.date);
        monthlyTotals[date.getMonth()] += p.amount;
      });

      const currentMonth = new Date().getMonth();
      const last6Months = [];
      for (let i = 5; i >= 0; i--) {
        let m = currentMonth - i;
        if (m < 0) m += 12;
        last6Months.push(m);
      }

      const maxRev = Math.max(...last6Months.map(m => monthlyTotals[m]), 1);

      this.months = last6Months.map(m => ({
        name: monthNames[m],
        val: (monthlyTotals[m] / maxRev) * 100
      }));

      this.cdr.detectChanges();
    });
  }

  viewFullReport() {
    this.router.navigate(['/admin/revenue-report']);
  }
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentService } from '../../core/services/payment.service';
import { PdfGeneratorService } from '../../core/services/pdf-generator.service';

@Component({
  selector: 'app-admin-payments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payments.html',
  styleUrl: './payments.css',
})
export class AdminPaymentsComponent implements OnInit {
  payments: any[] = [];

  constructor(
    private paymentService: PaymentService,
    private cdr: ChangeDetectorRef,
    private pdfGeneratorService: PdfGeneratorService
  ) {}

  ngOnInit() {
    this.loadPayments();
  }

  loadPayments() {
    this.paymentService.getPayments().subscribe(data => {
      this.payments = data;
      this.cdr.detectChanges();
    });
  }

 generateInvoice(payment: any): void {
  const invoiceDetails = {
    id: payment.id,
    clientName: payment.client,
    clientEmail: payment.email || '',
    
    // Convert single item into items array (Stripe-style compatible)
    items: [
      {
        description: payment.item,
        qty: 1,
        price: payment.amount,
      },
    ],

    // optional extras
    discount: payment.discount || 0,
    date: payment.date,
  };

  this.pdfGeneratorService.generateInvoicePdf(invoiceDetails);
}
}

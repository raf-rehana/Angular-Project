import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentService, Payment } from '../../core/services/payment.service';
import { PdfGeneratorService } from '../../core/services/pdf-generator.service';

@Component({
  selector: 'app-admin-payments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payments.html',
  styleUrl: './payments.css',
})
export class AdminPaymentsComponent implements OnInit {
  payments: Payment[] = [];
  filteredPayments: Payment[] = [];
  filterStatus: string = 'ALL';
  showManualRecordModal = false;
  newRecord: Partial<Payment> = {
    client: '',
    email: '',
    clientId: '',
    item: '',
    amount: 0,
    method: 'Manual/Cash',
    status: 'PAID',
    date: new Date().toISOString()
  };

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
      this.applyFilter();
    });
  }

  setFilter(status: string) {
    this.filterStatus = status;
    this.applyFilter();
  }

  applyFilter() {
    if (this.filterStatus === 'ALL') {
      this.filteredPayments = [...this.payments];
    } else {
      this.filteredPayments = this.payments.filter(p => p.status === this.filterStatus);
    }
    this.cdr.detectChanges();
  }

  openManualRecordModal() {
    this.newRecord = {
      client: '',
      email: '',
      clientId: 'MANUAL',
      item: '',
      amount: 0,
      method: 'Manual/Cash',
      status: 'PAID',
      date: new Date().toISOString()
    };
    this.showManualRecordModal = true;
  }

  saveManualRecord() {
    this.paymentService.addPayment(this.newRecord).subscribe(() => {
      this.loadPayments();
      this.showManualRecordModal = false;
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

  processRefund(payment: any) {
    if (confirm('Are you sure you want to process a refund for this payment?')) {
      this.paymentService.updatePayment(payment.id, { status: 'REFUNDED' }).subscribe(() => {
        this.loadPayments();
      });
    }
  }
}

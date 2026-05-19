import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentService, Payment } from '../../core/services/payment.service';
import { PdfGeneratorService } from '../../core/services/pdf-generator.service';
import { RequestService } from '../../core/services/request.service';
import { NotificationService } from '../../core/services/notification.service';

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
    private pdfGeneratorService: PdfGeneratorService,
    private requestService: RequestService,
    private notificationService: NotificationService
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
    console.log('[AdminPayments] Generating invoice for payment record:', payment);
    const invoiceDetails = {
      id: payment.id,
      orderId: payment.id,
      clientId: payment.clientId || 'N/A',
      clientName: payment.client,
      clientEmail: payment.email || '',
      service: payment.item,
      amount: payment.amount,
      date: payment.date,
      items: [
        {
          description: payment.item,
          qty: 1,
          price: payment.amount,
        },
      ],
      discount: payment.discount || 0,
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

  approvePayment(payment: any) {
    if (confirm(`Are you sure you want to approve the cash payment of BDT ${payment.amount} for ${payment.client}?`)) {
      this.paymentService.updatePayment(payment.id, { status: 'PAID' }).subscribe(() => {
        // If there's a linked service request, update its status to ASSIGNED
        if (payment.requestId) {
          this.requestService.updateStatus(payment.requestId, 'ADVANCE_PAID').subscribe({
            next: () => {
              // Notify client
              this.notificationService.create({
                userId: Number(payment.clientId),
                title: 'Advance Payment Approved',
                message: `We've approved your 20% advance payment for "${payment.item}". Awaiting employee assignment by Admin.`,
                type: 'STATUS_UPDATE'
              }).subscribe();

              // Notify Admin
              this.notificationService.create({
                userId: 10151,
                title: '20% Advance Paid',
                message: `Client paid the 20% advance for request "${payment.item}". You can now assign employees.`,
                type: 'INFO'
              }).subscribe();

              this.loadPayments();
            },
            error: (err) => {
              console.error('Failed to update request status:', err);
              this.loadPayments();
            }
          });
        } else {
          this.loadPayments();
        }
      });
    }
  }
}

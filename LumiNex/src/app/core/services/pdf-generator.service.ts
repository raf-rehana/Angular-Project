import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  constructor() { }

  generateInvoicePdf(invoiceDetails: any): void {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text('Invoice', 20, 20);

    doc.setFontSize(12);
    doc.text(`Invoice ID: ${invoiceDetails.id}`, 20, 30);
    doc.text(`Client Name: ${invoiceDetails.clientName}`, 20, 40);
    doc.text(`Service: ${invoiceDetails.service}`, 20, 50);
    doc.text(`Amount: $${invoiceDetails.amount}`, 20, 60);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 70);

    doc.save(`invoice-${invoiceDetails.id}.pdf`);
  }
}

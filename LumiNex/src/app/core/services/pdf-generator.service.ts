import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  constructor() {}

  async generateInvoicePdf(invoice: any): Promise<void> {
    const doc = new jsPDF();
    const primaryColor: [number, number, number] = [15, 23, 42]; // #0F172A

    // =========================
    // HEADER & LOGO
    // =========================
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, 210, 45, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(28);
    doc.setTextColor(255, 255, 255);
    doc.text('LumiNex', 15, 25);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Next Gen Service Hub', 15, 32);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('OFFICIAL INVOICE', 145, 20);
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(`Invoice ID:  #${invoice.id}`, 145, 28);
    doc.text(`Order ID:    #${invoice.orderId || 'N/A'}`, 145, 34);
    doc.text(`Client ID:   #${invoice.clientId || 'N/A'}`, 145, 40);

    // =========================
    // COMPANY & CLIENT INFO
    // =========================
    doc.setTextColor(0, 0, 0);
    
    // Company Details (Left)
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('From:', 15, 60);
    doc.setFont('helvetica', 'normal');
    doc.text('LumiNex Solutions Ltd.', 15, 67);
    doc.text('42 Tech Plaza, Banani', 15, 73);
    doc.text('Dhaka, Bangladesh', 15, 79);
    doc.text('support@luminex.com', 15, 85);

    // Bill To (Right)
    doc.setFont('helvetica', 'bold');
    doc.text('Bill To:', 120, 60);
    doc.setFont('helvetica', 'normal');
    doc.text(invoice.clientName || 'Valued Client', 120, 67);
    doc.text(invoice.clientEmail || 'client@luminex.com', 120, 73);
    doc.text(`Date: ${new Date(invoice.date).toLocaleDateString()}`, 120, 79);
    doc.text('Status: PAID', 120, 85);

    // =========================
    // TABLE
    // =========================
    const items = invoice.items || [
      {
        description: invoice.service,
        qty: 1,
        price: invoice.amount,
      },
    ];

    const tableData = items.map((item: any) => [
      item.description,
      item.qty,
      `৳ ${item.price.toLocaleString()}`,
      `৳ ${(item.qty * item.price).toLocaleString()}`
    ]);

    autoTable(doc, {
      startY: 100,
      head: [['Description', 'Qty', 'Unit Price', 'Total Amount']],
      body: tableData,
      theme: 'striped',
      headStyles: {
        fillColor: primaryColor,
        textColor: 255,
        fontSize: 10,
        fontStyle: 'bold',
        halign: 'center'
      },
      columnStyles: {
        0: { cellWidth: 100 },
        1: { halign: 'center' },
        2: { halign: 'right' },
        3: { halign: 'right' }
      },
      styles: {
        fontSize: 9,
        cellPadding: 6
      }
    });

    // =========================
    // SUMMARY SECTION
    // =========================
    let finalY = (doc as any).lastAutoTable.finalY + 15;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Subtotal:', 140, finalY);
    doc.text(`৳ ${invoice.amount.toLocaleString()}`, 180, finalY, { align: 'right' });

    doc.text('VAT (0%):', 140, finalY + 8);
    doc.text('৳ 0.00', 180, finalY + 8, { align: 'right' });

    doc.setDrawColor(200);
    doc.line(140, finalY + 12, 195, finalY + 12);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('Total Amount:', 140, finalY + 20);
    doc.text(`৳ ${invoice.amount.toLocaleString()}`, 180, finalY + 20, { align: 'right' });

    // =========================
    // SIGNATURE SECTION
    // =========================
    let sigY = finalY + 40;
    
    // Draw a line for signature
    doc.setDrawColor(200);
    doc.line(15, sigY, 70, sigY);
    
    // Stylized Signature Text
    doc.setFont('courier', 'italic');
    doc.setFontSize(14);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('LumiNex Auth.', 20, sigY - 5);
    
    // Label
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(100);
    doc.text('Authorized Signatory', 15, sigY + 6);
    doc.text('Digitally Verified', 15, sigY + 11);

    // Optional: Small Seal / Badge
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(0.5);
    doc.circle(180, sigY - 5, 12, 'S');
    doc.setFontSize(7);
    doc.text('VERIFIED', 180, sigY - 6, { align: 'center' });
    doc.text('PAYMENT', 180, sigY - 3, { align: 'center' });
    doc.text('LNX-SECURE', 180, sigY, { align: 'center' });

    // =========================
    // FOOTER & TERMS
    // =========================
    doc.setTextColor(100);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text('Terms & Conditions:', 15, 260);
    doc.setFont('helvetica', 'normal');
    doc.text('1. This is a computer-generated invoice and does not require a physical signature.', 15, 265);
    doc.text('2. Payment is non-refundable once the service initiation has begun.', 15, 270);
    doc.text('3. For any billing queries, please contact billing@luminex.com.', 15, 275);

    doc.setTextColor(150);
    doc.setFontSize(10);
    doc.text('Thank you for your business!', 105, 285, { align: 'center' });

    doc.save(`LumiNex_Invoice_${invoice.id}.pdf`);
  }
}

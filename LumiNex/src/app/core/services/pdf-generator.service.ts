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

    // =========================
    // BRAND HEADER (Stripe style)
    // =========================
    doc.setFillColor(15, 23, 42); // dark navy
    doc.rect(0, 0, 210, 40, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255);
    doc.text('LumiNex', 14, 22);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('INVOICE', 170, 18);
    doc.text(`#${invoice.id}`, 170, 25);

    // =========================
    // CLIENT INFO
    // =========================
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);

    doc.text('Bill To:', 14, 55);
    doc.text(invoice.clientName || 'Client Name', 14, 62);
    doc.text(invoice.clientEmail || 'client@email.com', 14, 68);

    doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, 55);

    // =========================
    // ITEMS TABLE (Stripe style grid)
    // =========================
    const items = invoice.items || [
      {
        description: invoice.service,
        qty: 1,
        price: invoice.amount,
      },
    ];

    let subtotal = 0;

    const tableData = items.map((item: any) => {
      const total = item.qty * item.price;
      subtotal += total;

      return [
        item.description,
        item.qty,
        item.price.toFixed(2),
        total.toFixed(2),
      ];
    });

    autoTable(doc, {
      startY: 80,
      head: [['Description', 'Qty', 'Price', 'Total']],
      body: tableData,
      theme: 'grid',
      styles: {
        font: 'helvetica',
        fontSize: 10,
        cellPadding: 4,
      },
      headStyles: {
        fillColor: [15, 23, 42],
        textColor: 255,
      },
    });

    // =========================
    // CALCULATIONS
    // =========================
    const tax = subtotal * 0.15; // 15% VAT example
    const discount = invoice.discount || 0;
    const total = subtotal + tax - discount;

    let finalY = (doc as any).lastAutoTable.finalY + 10;

    // =========================
    // SUMMARY BOX (Stripe style right aligned)
    // =========================
    doc.setFontSize(11);

    doc.text(`Subtotal: ${subtotal.toFixed(2)}`, 140, finalY);
    doc.text(`Tax (15%): ${tax.toFixed(2)}`, 140, finalY + 7);
    doc.text(`Discount: ${discount.toFixed(2)}`, 140, finalY + 14);

    doc.setFont('helvetica', 'bold');
    doc.text(`Total: ${total.toFixed(2)}`, 140, finalY + 24);

    // =========================
    // FOOTER
    // =========================
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(120);

    doc.text('Thank you for choosing LumiNex.', 14, 280);

    doc.save(`luminex-invoice-${invoice.id}.pdf`);
  }
}

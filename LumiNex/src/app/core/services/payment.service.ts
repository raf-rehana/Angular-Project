import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Payment {
  id?: string | number;
  clientId: string | number;
  client: string;
  email?: string;
  item: string;
  amount: number;
  method: string;
  status: 'PAID' | 'PENDING' | 'FAILED' | 'REFUNDED';
  date: string;
  tranId?: string;
  requestId?: string | number;
}

export interface PaymentInitRequest {
  amount: number;
  currency?: string;
  planId?: string | number;
  paymentId?: string | number;
  requestId?: string | number;
  planName?: string;
  clientId: string | number;
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
  paymentMethod?: string;  // 'ONLINE' | 'MOBILE_WALLET' | 'BANK'
}

export interface PaymentInitResponse {
  status: 'SUCCESS' | 'FAILED';
  payment_url?: string;   // SSLCommerz gateway page URL
  session_key?: string;
  tran_id?: string;
  message?: string;
}

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private dbUrl = `${environment.apiUrl}/payments`;
  private backendPaymentUrl = `${environment.backendUrl}/payment`;

  constructor(private http: HttpClient) {}

  /** Get all payments from json-server */
  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.dbUrl);
  }

  /** Save a payment record directly (for CASH payments) */
  addPayment(payment: Partial<Payment>): Observable<Payment> {
    return this.http.post<Payment>(this.dbUrl, payment);
  }

  /** Initiate SSLCommerz session — returns a gateway URL to redirect/embed */
  initiatePayment(data: PaymentInitRequest): Observable<PaymentInitResponse> {
    return this.http.post<PaymentInitResponse>(`${this.backendPaymentUrl}/init`, data);
  }

  getSubscriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/subscriptions`);
  }

  updatePayment(id: string | number, payment: Partial<Payment>): Observable<Payment> {
    return this.http.patch<Payment>(`${this.dbUrl}/${id}`, payment);
  }

  deletePayment(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.dbUrl}/${id}`);
  }
}

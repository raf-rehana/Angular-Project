
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Payment {
  id?: string | number;
  clientId: string;
  client: string;
  item: string;
  amount: number;
  method: string;
  status: 'PAID' | 'PENDING' | 'FAILED';
  date: string;
  tranId?: string;
}

export interface PaymentInitRequest {
  amount: number;
  currency?: string;
  planId?: string | number;
  planName?: string;
  clientId: string;
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
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
  // json-server (existing)
  private dbUrl = 'http://localhost:3000/payments';
  // Your new Node backend
  private backendUrl = 'http://localhost:4000/api/payment';

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
    return this.http.post<PaymentInitResponse>(`${this.backendUrl}/init`, data);
  }
}
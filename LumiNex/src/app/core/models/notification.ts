export interface Notification {
  id: number;
  userId: number;
  title: string;
  message: string;
  type: 'STATUS_UPDATE' | 'PAYMENT_DUE' | 'DOCUMENT_NEEDED' | 'INFO' | 'TASK_ASSIGNED';
  isRead: boolean;
  createdAt: string;
}
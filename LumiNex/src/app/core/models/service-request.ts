export interface ServiceRequest {
  id: number;
  tenantId: number;
  userId: number;
  serviceId: number;
  serviceName: string;
  categoryName: string;
  assignedTo?: string;
  status: 'PENDING' | 'ASSIGNED' | 'IN_PROGRESS' | 'REVIEW' | 'COMPLETED' | 'REJECTED';
  priority: 'LOW' | 'NORMAL' | 'HIGH' | 'URGENT';
  clientNotes?: string;
  staffNotes?: string;
  createdAt: string;
  updatedAt?: string;
  completedAt?: string;
}
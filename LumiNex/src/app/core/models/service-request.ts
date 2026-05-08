export interface ServiceRequest {
  id: string | number;
  tenantId?: string | number;
  userId: string | number;
  serviceId: string | number;
  serviceName: string;
  categoryName: string;
  assignedTo?: string | number;
  status: 'PENDING' | 'ASSIGNED' | 'IN_PROGRESS' | 'REVIEW' | 'COMPLETED' | 'REJECTED';
  priority: 'LOW' | 'NORMAL' | 'HIGH' | 'URGENT';
  clientNotes?: string;
  staffNotes?: string;
  createdAt: string;
  updatedAt?: string;
  completedAt?: string;
  progress?: number;
}
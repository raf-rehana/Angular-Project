export interface Attachment {
  id: string | number;
  name: string;
  url: string;
  uploadedAt: string;
}

export interface ServiceRequest {
  id: string | number;
  tenantId?: string | number;
  userId: string | number;
  serviceId: string | number;
  serviceName: string;
  categoryName: string;
  clientEmail?: string;
  assignedTo?: string | number;
  status: 'PROPOSAL_PENDING' | 'PENDING' | 'AWAITING_ADVANCE' | 'ADVANCE_PAID' | 'ASSIGNED' | 'IN_PROGRESS' | 'REVIEW' | 'COMPLETED' | 'REJECTED';
  priority: 'LOW' | 'NORMAL' | 'HIGH' | 'URGENT';
  clientNotes?: string;
  employeeNotes?: string;
  createdAt: string;
  updatedAt?: string;
  completedAt?: string;
  progress?: number;
  documents?: Attachment[];
  workedHours?: number;
  timerStartedAt?: string;
  totalAmount?: number;
  projectDocumentation?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'STAFF' | 'CLIENT';
  password?: string;
  phone?: string;
  companyName?: string;
  businessType?: string;
  plan?: string;
  tenantId?: string;
  designation?: string;
  avatar?: string;
  address?: string;
}

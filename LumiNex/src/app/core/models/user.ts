export interface User {
     id: number;
  name: string;
  email: string;
  role: 'SUPER_ADMIN' | 'ADMIN' | 'STAFF' | 'CLIENT';
  tenantId?: number;
}

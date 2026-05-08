export interface ServiceCategory {
  id: string | number;
  name: string;
  icon: string;
  color: string;
}

export interface Service {
  id: string | number;
  categoryId: string | number;
  categoryName: string;
  name: string;
  description: string;
  price: number;
  priceType: 'FIXED' | 'MONTHLY' | 'YEARLY' | 'CUSTOM';
  deliveryDays: string;
  isActive: boolean;
  requiredDocuments?: RequiredDocument[];
}

export interface RequiredDocument {
  id: string | number;
  docName: string;
  isMandatory: boolean;
  description: string;
}
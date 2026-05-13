import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceCatalogueService } from '../../core/services/service-catalogue';
import { RequestService } from '../../core/services/request.service';
import { AuthService } from '../../core/services/auth.services';
import { Service } from '../../core/models/service';

@Component({
  selector: 'app-request-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './request-form.html',
  styleUrl: './request-form.css',
})
export class RequestForm implements OnInit {
  selectedService: Service | null = null;
  notes: string = '';
  priority: string = 'NORMAL';
  loading = false;
  uploadedFiles: File[] = [];
  uploadedImages: File[] = [];
  imagePreviews: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catalogueService: ServiceCatalogueService,
    private requestService: RequestService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const serviceId = params['serviceId'];
      if (serviceId) {
        this.catalogueService.getServiceById(serviceId.toString()).subscribe(data => {
          this.selectedService = data;
          this.cdr.detectChanges();
        });
      }
    });
  }

  goBack() {
    this.router.navigate(['/client/catalogue']);
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.uploadedFiles.push(files[i]);
      }
    }
  }

  onRequiredDocSelected(event: any, docName: string) {
    const file = event.target.files[0];
    if (file) {
      // We wrap the file to ensure the name matches the requirement for isDocumentUploaded
      // This is a simple way to track which requirement is met
      const blob = file.slice(0, file.size, file.type);
      const newFile = new File([blob], `${docName} - ${file.name}`, { type: file.type });
      this.uploadedFiles.push(newFile);
      this.cdr.detectChanges();
    }
  }

  onImageSelected(event: any) {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith('image/')) {
          this.uploadedImages.push(file);
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.imagePreviews.push(e.target.result);
            this.cdr.detectChanges();
          };
          reader.readAsDataURL(file);
        }
      }
    }
  }

  removeFile(index: number) {
    this.uploadedFiles.splice(index, 1);
  }

  removeImage(index: number) {
    this.uploadedImages.splice(index, 1);
    this.imagePreviews.splice(index, 1);
  }

  isDocumentUploaded(docName: string): boolean {
    return this.uploadedFiles.some(f => f.name.toLowerCase().includes(docName.toLowerCase()));
  }

  submit() {
    console.log('Submit triggered');
    if (!this.selectedService) {
      alert('Error: No service selected.');
      return;
    }
    if (!this.authService.currentUser) {
      alert('Error: You must be logged in to submit a request.');
      this.router.navigate(['/login']);
      return;
    }

    // Basic validation for mandatory documents
    if (this.selectedService.requiredDocuments) {
      const missing = this.selectedService.requiredDocuments
        .filter(d => d.isMandatory && !this.isDocumentUploaded(d.docName));
      
      if (missing.length > 0) {
        alert('Please upload all required documents: ' + missing.map(m => m.docName).join(', '));
        return;
      }
    }

    this.loading = true;
    console.log('Submitting data...', this.priority, this.notes);
    
    // Simulating file upload to cloud storage
    const allFiles = [...this.uploadedFiles, ...this.uploadedImages];
    const mockDocuments = allFiles.map((file, index) => ({
      id: `doc-${Date.now()}-${index}`,
      name: file.name,
      url: `assets/docs/${file.name}`, // Mock URL
      uploadedAt: new Date().toISOString()
    }));

    const requestData = {
      userId: this.authService.currentUser.id,
      serviceId: this.selectedService.id,
      serviceName: this.selectedService.name,
      categoryName: this.selectedService.categoryName,
      status: 'PENDING' as 'PENDING',
      priority: this.priority as any,
      clientNotes: this.notes,
      progress: 0,
      createdAt: new Date().toISOString(),
      documents: mockDocuments
    };

    console.log('Request Payload:', requestData);

    this.requestService.submitRequest(requestData).subscribe({
      next: (res) => {
        console.log('Submission successful:', res);
        this.loading = false;
        // Redirect to payment page with service details
        this.router.navigate(['/client/payments'], {
          queryParams: {
            serviceId: this.selectedService?.id,
            serviceName: this.selectedService?.name,
            amount: this.selectedService?.price
          }
        });
      },
      error: (err) => {
        console.error('Submission failed:', err);
        this.loading = false;
        alert('Failed to submit request. Error: ' + (err.message || 'Unknown error'));
      }
    });
  }
}

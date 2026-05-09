import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../core/services/admin.service';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-client-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container-fluid py-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="fw-bold text-dark mb-0">Client Management</h2>
          <p class="text-muted">View and manage client accounts.</p>
        </div>
        <div>
          <button class="btn btn-primary" (click)="showAddForm = !showAddForm">
            <i class="bi" [ngClass]="showAddForm ? 'bi-x-lg' : 'bi-person-plus'"></i>
            {{ showAddForm ? 'Cancel' : 'Add Client' }}
          </button>
        </div>
      </div>

      <!-- Add Client Form -->
      <div class="card border-0 shadow-sm rounded-4 mb-4" *ngIf="showAddForm">
        <div class="card-body p-4">
          <h5 class="fw-bold mb-3">Add New Client</h5>
          <form (ngSubmit)="addClient()" #clientForm="ngForm">
            <div class="row g-3">
              <div class="col-md-4">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-control" name="name" [(ngModel)]="newClient.name" required>
              </div>
              <div class="col-md-4">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" name="email" [(ngModel)]="newClient.email" required>
              </div>
              <div class="col-md-4">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" name="password" [(ngModel)]="newClient.password" required>
              </div>
              <div class="col-12 text-end">
                <button type="submit" class="btn btn-primary px-4" [disabled]="!clientForm.form.valid">Save Client</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="card border-0 shadow-sm rounded-4">
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
              <thead class="table-light">
                <tr>
                  <th class="ps-4 py-3 border-0">Client</th>
                  <th class="py-3 border-0">Email</th>
                  <th class="py-3 border-0">Role</th>
                  <th class="pe-4 py-3 border-0 text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let client of clients">
                  <td class="ps-4 py-3">
                    <div class="d-flex align-items-center" (click)="viewProfile(client)" style="cursor: pointer;">
                      <div class="avatar-circle bg-primary text-white me-3 fw-bold d-flex align-items-center justify-content-center" style="width: 40px; height: 40px; border-radius: 50%;">
                        <img *ngIf="client.avatar; else initialAvatar" [src]="client.avatar" class="img-fluid w-100 h-100 object-fit-cover" style="border-radius: 50%;">
                        <ng-template #initialAvatar>{{ client.name.charAt(0) | uppercase }}</ng-template>
                      </div>
                      <div class="fw-bold text-dark text-primary-hover">{{ client.name }}</div>
                    </div>
                  </td>
                  <td class="py-3 text-muted">{{ client.email }}</td>
                  <td class="py-3">
                    <select class="form-select form-select-sm w-auto d-inline-block border-0 bg-light" 
                            [(ngModel)]="client.role" 
                            (change)="changeRole(client)">
                      <option value="CLIENT">CLIENT</option>
                      <option value="EMPLOYEE">EMPLOYEE</option>
                      <option value="ADMIN">ADMIN</option>
                    </select>
                  </td>
                  <td class="pe-4 py-3 text-end">
                    <button class="btn btn-sm btn-light text-danger" (click)="deleteClient(client.id)">
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr *ngIf="clients.length === 0">
                  <td colspan="4" class="text-center py-5 text-muted">No clients found.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- User Profile Modal -->
      <div class="modal-backdrop fade show" *ngIf="selectedUser" (click)="selectedUser = null"></div>
      <div class="modal fade show d-block" *ngIf="selectedUser" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg rounded-5 overflow-hidden">
            <div class="modal-header border-0 bg-primary text-white p-4">
              <h5 class="modal-title fw-bold">User Profile</h5>
              <button type="button" class="btn-close btn-close-white" (click)="selectedUser = null"></button>
            </div>
            <div class="modal-body p-4 p-md-5">
              <div class="text-center mb-4">
                <div class="avatar-circle bg-light text-primary mx-auto mb-3 shadow-sm d-flex align-items-center justify-content-center" style="width: 100px; height: 100px; border-radius: 50%; font-size: 2.5rem; font-weight: bold;">
                  <img *ngIf="selectedUser.avatar; else modalInitial" [src]="selectedUser.avatar" class="img-fluid w-100 h-100 object-fit-cover" style="border-radius: 50%;">
                  <ng-template #modalInitial>{{ selectedUser.name.charAt(0) | uppercase }}</ng-template>
                </div>
                <h4 class="fw-bold mb-1">{{ selectedUser.name }}</h4>
                <div class="badge bg-primary-soft text-primary rounded-pill px-3">{{ selectedUser.role }}</div>
              </div>
              
              <div class="row g-3">
                <div class="col-12">
                  <label class="small fw-bold text-muted text-uppercase mb-1">Email Address</label>
                  <div class="p-3 bg-light rounded-3">{{ selectedUser.email }}</div>
                </div>
                <div class="col-12" *ngIf="selectedUser.phone">
                  <label class="small fw-bold text-muted text-uppercase mb-1">Phone Number</label>
                  <div class="p-3 bg-light rounded-3">{{ selectedUser.phone }}</div>
                </div>
                <div class="col-12" *ngIf="selectedUser.companyName">
                  <label class="small fw-bold text-muted text-uppercase mb-1">Company</label>
                  <div class="p-3 bg-light rounded-3">{{ selectedUser.companyName }}</div>
                </div>
                <div class="col-12" *ngIf="selectedUser.address">
                  <label class="small fw-bold text-muted text-uppercase mb-1">Address</label>
                  <div class="p-3 bg-light rounded-3 small">{{ selectedUser.address }}</div>
                </div>
              </div>
            </div>
            <div class="modal-footer border-0 p-4 pt-0">
              <button type="button" class="btn btn-light w-100 rounded-pill py-2" (click)="selectedUser = null">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .text-primary-hover:hover { color: var(--bs-primary) !important; text-decoration: underline; }
    .bg-primary-soft { background-color: #eef2ff; }
  `]
})
export class ClientManagementComponent implements OnInit {
  clients: User[] = [];
  selectedUser: User | null = null;
  showAddForm = false;
  newClient: Partial<User> = {
    name: '',
    email: '',
    password: 'demo123',
    role: 'CLIENT'
  };

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.adminService.getUsers('CLIENT').subscribe(data => {
      this.clients = data;
    });
  }

  viewProfile(user: User) {
    this.selectedUser = user;
  }

  addClient() {
    this.adminService.addUser(this.newClient).subscribe(() => {
      this.loadClients();
      this.showAddForm = false;
      this.newClient = { name: '', email: '', password: 'demo123', role: 'CLIENT' };
    });
  }

  changeRole(user: User) {
    this.adminService.updateUser(user.id, { role: user.role }).subscribe(() => {
      console.log('Role updated successfully');
    });
  }

  deleteClient(id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.adminService.deleteUser(id).subscribe(() => {
        this.loadClients();
      });
    }
  }
}

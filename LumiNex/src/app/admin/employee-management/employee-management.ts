import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../core/services/admin.service';
import { RequestService } from '../../core/services/request.service';
import { User } from '../../core/models/user';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-employee-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-management.html',
  styleUrl: './employee-management.css'
})
export class EmployeeManagementComponent implements OnInit {
  employee: User[] = [];
  selectedEmployee: User | null = null;
  showAddForm = false;
  newEmployee: Partial<User> = {
    name: '',
    email: '',
    password: 'demo123',
    role: 'EMPLOYEE',
    designation: 'Full Stack Developer'
  };
  workloads: { [key: string]: number } = {};

  constructor(
    private adminService: AdminService,
    private requestService: RequestService,
    private cdr: ChangeDetectorRef,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.loadEmployee();
  }

  loadEmployee() {
    this.adminService.getUsers('EMPLOYEE').subscribe(data => {
      this.employee = data;
      this.calculateWorkloads();
      this.cdr.detectChanges();
    });
  }

  calculateWorkloads() {
    this.requestService.getAllRequests().subscribe(requests => {
      this.workloads = {};
      requests.forEach(req => {
        if (req.assignedTo && req.status !== 'COMPLETED' && req.status !== 'REJECTED') {
          const empId = req.assignedTo.toString();
          this.workloads[empId] = (this.workloads[empId] || 0) + 1;
        }
      });
      this.cdr.detectChanges();
    });
  }

  viewProfile(employee: User) {
    this.selectedEmployee = employee;
  }

  addEmployee() {
    this.adminService.addUser(this.newEmployee).subscribe(() => {
      this.loadEmployee();
      this.showAddForm = false;
      this.newEmployee = { name: '', email: '', password: 'demo123', role: 'EMPLOYEE', designation: 'Full Stack Developer' };
    });
  }

  async deleteEmployee(id: string | number) {
    const confirmed = await this.modalService.confirm('Delete this employee member?');
    if (confirmed) {
      this.adminService.deleteUser(id).subscribe(() => this.loadEmployee());
    }
  }
}

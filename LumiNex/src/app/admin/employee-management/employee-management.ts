import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../core/services/admin.service';
import { User } from '../../core/models/user';

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

  constructor(
    private adminService: AdminService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadEmployee();
  }

  loadEmployee() {
    this.adminService.getUsers('EMPLOYEE').subscribe(data => {
      this.employee = data;
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

  deleteEmployee(id: string) {
    if (confirm('Delete this employee member?')) {
      this.adminService.deleteUser(id).subscribe(() => this.loadEmployee());
    }
  }
}
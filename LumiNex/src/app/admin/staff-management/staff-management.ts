import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../core/services/admin.service';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-staff-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './staff-management.html',
  styleUrl: './staff-management.css'
})
export class StaffManagementComponent implements OnInit {
  staff: User[] = [];
  selectedStaff: User | null = null;
  showAddForm = false;
  newStaff: Partial<User> = {
    name: '',
    email: '',
    password: 'demo123',
    role: 'STAFF',
    designation: 'Full Stack Developer'
  };

  constructor(
    private adminService: AdminService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadStaff();
  }

  loadStaff() {
    this.adminService.getUsers('STAFF').subscribe(data => {
      this.staff = data;
      this.cdr.detectChanges();
    });
  }

  viewProfile(staff: User) {
    this.selectedStaff = staff;
  }

  addStaff() {
    this.adminService.addUser(this.newStaff).subscribe(() => {
      this.loadStaff();
      this.showAddForm = false;
      this.newStaff = { name: '', email: '', password: 'demo123', role: 'STAFF', designation: 'Full Stack Developer' };
    });
  }

  deleteStaff(id: string) {
    if (confirm('Delete this staff member?')) {
      this.adminService.deleteUser(id).subscribe(() => this.loadStaff());
    }
  }
}
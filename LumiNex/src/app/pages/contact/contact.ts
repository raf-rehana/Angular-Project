import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    service: 'Web Development',
    message: ''
  };

  isSubmitted = false;

  submitForm() {
    console.log('Contact Form Submitted:', this.formData);
    this.isSubmitted = true;
    
    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      this.isSubmitted = false;
      // Reset form if needed
      // this.formData = { name: '', email: '', service: 'Web Development', message: '' };
    }, 5000);
  }
}

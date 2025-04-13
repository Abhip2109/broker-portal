import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  showPassword = false;
  rememberMe = false;

  validLength = false;
  validUppercase = false;
  validLowercase = false;
  validNumber = false;
  validSpecial = false;

  constructor(private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  updatePasswordChecklist() {
    const pwd = this.password || '';
    this.validLength = pwd.length >= 8;
    this.validUppercase = /[A-Z]/.test(pwd);
    this.validLowercase = /[a-z]/.test(pwd);
    this.validNumber = /\d/.test(pwd);
    this.validSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
  }

  submitForm() {
    if (this.validLength && this.validUppercase && this.validLowercase && this.validNumber && this.validSpecial) {
      alert('Registration successful!');
      this.router.navigate(['/broker-additional-info']);
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}

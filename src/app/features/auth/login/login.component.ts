// login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword = false;
  email = '';
  password = '';
  rememberMe = false;

  constructor(private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  submitForm() {
    if (!this.email || !this.password) {
      alert('Please enter valid credentials.');
      return;
    }
    alert(`Logged in as ${this.email}`);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  isRightPanelActive: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    this.isLoading = true;
    // Simulate a login request
    setTimeout(() => {
      this.isLoading = false;
      alert('Login Successful!');
      this.router.navigate(['/quotes']);
    }, 2000);
  }

  onSignUpClick() {
    this.isRightPanelActive = true;
  }

  onSignInClick() {
    this.isRightPanelActive = false;
  }
}

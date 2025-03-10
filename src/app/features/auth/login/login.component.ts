import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add CommonModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    this.isLoading = true; // Show loading animation

    setTimeout(() => {
      this.isLoading = false;
      alert('Login Successful!');
      this.router.navigate(['/quotes']);
    }, 2000); // Simulating a login request
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // Property to toggle between landing (unauthenticated) and authenticated views.
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    // Replace the following with real authentication logic.
    // For instance, subscribe to an AuthService observable.
    // this.authService.isAuthenticated$.subscribe(auth => this.isLoggedIn = auth);
    this.isLoggedIn = true; // Default to false until authentication is implemented.
  }
}

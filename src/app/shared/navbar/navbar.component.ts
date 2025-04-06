import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  searchTerm: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Replace the following with real authentication logic.
    this.isLoggedIn = true;
  }

  searchQuotes(): void {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/quotes'], {
        queryParams: { search: this.searchTerm.trim() }
      });
    }
  }
}

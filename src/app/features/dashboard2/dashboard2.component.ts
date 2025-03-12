import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard2',
  standalone: true,
  imports: [CommonModule, FormsModule,LeaderboardComponent,SidebarComponent],
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component {
  searchQuery: string = '';
  sortOption: string = 'date';
  recommendations: string[] = [];

  quotes = [
    { id: 1, customerName: 'Alice Johnson', insuranceType: 'Renter’s', premium: 120, status: 'Approved' },
    { id: 2, customerName: 'John Doe', insuranceType: 'Car', premium: 220, status: 'Pending' },
    { id: 3, customerName: 'Emma Smith', insuranceType: 'Pet', premium: 80, status: 'Rejected' }
  ];

  constructor(private router: Router) {
    this.generateRecommendations();
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'badge-success';
      case 'pending':
        return 'badge-warning';
      case 'rejected':
        return 'badge-danger';
      default:
        return 'badge-secondary';
    }
  }
  

  countQuotes(status: string): number {
    return this.quotes.filter(q => q.status === status).length;
  }

  filteredQuotes() {
    let filtered = this.quotes.filter(q => q.customerName.toLowerCase().includes(this.searchQuery.toLowerCase()));

    if (this.sortOption === 'premium') {
      return filtered.sort((a, b) => a.premium - b.premium);
    }
    return filtered; // Default sort by date (static data for now)
  }

  generateRecommendations() {
    this.recommendations = [];

    for (const quote of this.quotes) {
      if (quote.insuranceType === 'Renter’s') {
        this.recommendations.push(`${quote.customerName} should consider adding fire protection.`);
        this.recommendations.push(`${quote.customerName} might need theft coverage.`);
      } else if (quote.insuranceType === 'Car') {
        this.recommendations.push(`${quote.customerName} should add roadside assistance.`);
        this.recommendations.push(`${quote.customerName} may benefit from premium accident coverage.`);
      } else if (quote.insuranceType === 'Pet') {
        this.recommendations.push(`${quote.customerName} should add vet check-up coverage.`);
      }
    }
  }

  viewQuote(id: number) {
    this.router.navigate(['/quotes', id]);
  }

  deleteQuote(id: number) {
    if (confirm('Are you sure you want to delete this quote?')) {
      this.quotes = this.quotes.filter(q => q.id !== id);
      this.generateRecommendations(); // Refresh AI suggestions
    }
  }
}

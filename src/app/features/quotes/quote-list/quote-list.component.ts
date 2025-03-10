import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent {
  searchQuery: string = '';
  sortOption: string = 'date';

  quotes = [
    { id: 1, customerName: 'Alice Johnson', insuranceType: 'Renter’s', premium: 120, status: 'Approved' },
    { id: 2, customerName: 'John Doe', insuranceType: 'Car', premium: 220, status: 'Pending' },
    { id: 3, customerName: 'Emma Smith', insuranceType: 'Pet', premium: 80, status: 'Rejected' }
  ];

  constructor(private router: Router) {}

  filteredQuotes() {
    let filtered = this.quotes.filter(q => q.customerName.toLowerCase().includes(this.searchQuery.toLowerCase()));

    if (this.sortOption === 'premium') {
      return filtered.sort((a, b) => a.premium - b.premium);
    }
    return filtered; // Default sort by date (static data for now)
  }

  viewQuote(id: number) {
    this.router.navigate(['/quotes', id]);
  }

  deleteQuote(id: number) {
    if (confirm('Are you sure you want to delete this quote?')) {
      this.quotes = this.quotes.filter(q => q.id !== id);
    }
  }
}

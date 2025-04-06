import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

export interface Quote {
  id: number;
  customerName: string;
  email: string;
  premium: number;
  status: string;
  createdDate: Date;
}

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgClass,
    DatePipe
  ],
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  quotes: Quote[] = [];
  filteredQuotes: Quote[] = [];
  statuses: string[] = ['Draft', 'Submitted', 'Bound', 'Rejected'];
  searchTerm = '';
  selectedStatus = '';
  pageSize = 5;
  currentPage = 1;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Read search query param
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['search'] || '';
    });

    // Load quotes and apply filter after loading
    this.loadQuotes();
  }

  loadQuotes(): void {
    // Replace with real API call if needed
    this.quotes = [
      {
        id: 1,
        customerName: 'Alice Johnson',
        email: 'alice@example.com',
        premium: 480.50,
        status: 'Draft',
        createdDate: new Date('2024-12-01')
      },
      {
        id: 2,
        customerName: 'Bob Smith',
        email: 'bob@example.com',
        premium: 530.20,
        status: 'Submitted',
        createdDate: new Date('2024-12-03')
      },
      {
        id: 3,
        customerName: 'Charlie Davis',
        email: 'charlie@example.com',
        premium: 610.75,
        status: 'Bound',
        createdDate: new Date('2024-12-05')
      },
      {
        id: 4,
        customerName: 'Diana West',
        email: 'diana@example.com',
        premium: 455.10,
        status: 'Rejected',
        createdDate: new Date('2024-12-06')
      }
    ];

    // Apply filter after quotes are ready
    this.filterQuotes();
  }

  filterQuotes(): void {
    this.filteredQuotes = this.quotes.filter(q =>
      (this.selectedStatus ? q.status === this.selectedStatus : true) &&
      (this.searchTerm ? q.customerName.toLowerCase().includes(this.searchTerm.toLowerCase()) : true)
    );
    this.currentPage = 1;
  }

  paginateQuotes(): Quote[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredQuotes.slice(start, start + this.pageSize);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  softDelete(quote: Quote): void {
    if (confirm('Are you sure to delete this quote?')) {
      quote.status = 'Deleted';
      this.http.put(`/api/quotes/${quote.id}`, quote).subscribe(() => this.loadQuotes());
    }
  }

  submitForBind(quote: Quote): void {
    if (confirm('Submit this quote for binding?')) {
      quote.status = 'Submitted';
      this.http.put(`/api/quotes/${quote.id}`, quote).subscribe(() => this.loadQuotes());
    }
  }

  viewQuote(quote: Quote): void {
    alert(`Viewing quote #${quote.id}`);
  }

  editQuote(quote: Quote): void {
    alert(`Editing quote #${quote.id}`);
  }

  totalPages(): number {
    return Math.ceil(this.filteredQuotes.length / this.pageSize);
  }
}

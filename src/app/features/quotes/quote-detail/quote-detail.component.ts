import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quote-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent {
  quote = {
    id: 1,
    customerName: 'Alice Johnson',
    insuranceType: 'Renter’s',
    premium: 120,
    status: 'Approved'
  };

  recommendations: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.generateRecommendations();
  }

  generateRecommendations() {
    if (this.quote.insuranceType === 'Renter’s') {
      this.recommendations.push('Consider adding fire coverage.');
      this.recommendations.push('Upgrade to comprehensive theft protection.');
    } else if (this.quote.insuranceType === 'Car') {
      this.recommendations.push('Add roadside assistance for just $5 more.');
      this.recommendations.push('Switch to premium for better accident coverage.');
    } else if (this.quote.insuranceType === 'Pet') {
      this.recommendations.push('Add annual vet check-up coverage.');
    }
  }

  goBack() {
    this.router.navigate(['/quotes']);
  }
}

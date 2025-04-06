// quote-detail.component.ts
import { Component } from '@angular/core';
import { CommonModule, NgClass, DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quote-detail',
  standalone: true,
  imports: [CommonModule, NgClass, DatePipe],
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent {
  quote = {
    id: 1,
    customerName: 'Alice Johnson',
    email: 'alice@example.com',
    insuranceType: 'Renter’s',
    premium: 120,
    status: 'Approved',
    createdDate: new Date('2024-12-01'),
    property: {
      type: 'Apartment',
      address: '123 Blue Lane, California, CA',
      sqFootage: 1200,
      yearBuilt: 2015
    },
    coverage: {
      personalProperty: 50000,
      liability: 100000,
      deductible: 500,
      addOns: ['Flood Coverage', 'Identity Theft Protection']
    },
    safetyFeatures: ['Fire Protection', 'Gated Community'],
    creditScore: 'Good',
    previousClaims: 0
  };

  recommendations: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.generateRecommendations();
  }

  generateRecommendations() {
    const { property, coverage, safetyFeatures, creditScore, previousClaims } = this.quote;

    // Property-related suggestions
    if (property.yearBuilt < 2000) {
      this.recommendations.push('Consider property age adjustments for premium savings.');
    }
    if (property.sqFootage > 1500) {
      this.recommendations.push('Your property is large—consider increased liability coverage.');
    }

    // Coverage recommendations
    if (coverage.personalProperty < 75000) {
      this.recommendations.push('You may want to increase personal property coverage.');
    }
    if (!coverage.addOns.includes('Earthquake Coverage')) {
      this.recommendations.push('Add Earthquake Coverage if you live in a risk-prone area.');
    }

    // Safety-related recommendations
    const requiredFeatures = ['Smoke Detectors', 'Sprinkler System', 'Security Cameras'];
    requiredFeatures.forEach(feature => {
      if (!safetyFeatures.includes(feature)) {
        this.recommendations.push(`Install ${feature} for additional discounts.`);
      }
    });

    // Credit score analysis
    if (creditScore === 'Fair' || creditScore === 'Poor') {
      this.recommendations.push('Improving your credit score can help lower premiums.');
    }

    // Claims history
    if (previousClaims > 0) {
      this.recommendations.push('Reduce future claims to improve your insurance profile.');
    }
  }

  goBack() {
    this.router.navigate(['/quotes']);
  }
}

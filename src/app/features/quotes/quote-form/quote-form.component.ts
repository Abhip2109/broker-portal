import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ✅ Define a type for the quote properties
interface QuoteOptions {
  carInsurance: boolean;
  petInsurance: boolean;
  fireProtection: boolean;
  securityCameras: boolean;
  gatedCommunity: boolean;
}

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent {
  step = 1;
  basePremium = 500; // Base premium for Renter's Insurance
  finalPremium = this.basePremium;

  // ✅ Use the defined interface instead of index signature
  quote: QuoteOptions = {
    carInsurance: false,
    petInsurance: false,
    fireProtection: false,
    securityCameras: false,
    gatedCommunity: false
  };

  // ✅ Now, TypeScript recognizes these properties and allows dot notation
  toggleInsurance(type: keyof QuoteOptions) {
    this.quote[type] = !this.quote[type];
    this.calculatePremium();
  }

  toggleDiscount(feature: keyof QuoteOptions) {
    this.quote[feature] = !this.quote[feature];
    this.calculatePremium();
  }

  calculatePremium() {
    let premium = this.basePremium;

    if (this.quote.carInsurance) premium += 200;
    if (this.quote.petInsurance) premium += 100;

    let discount = 0;
    if (this.quote.fireProtection) discount += 10;
    if (this.quote.securityCameras) discount += 5;
    if (this.quote.gatedCommunity) discount += 7;

    this.finalPremium = premium - (premium * discount) / 100;
  }

  nextStep() {
    if (this.step < 3) {
      this.step++;
    }
  }

  submitQuote() {
    alert(`Final Quote: $${this.finalPremium}`);
  }
}

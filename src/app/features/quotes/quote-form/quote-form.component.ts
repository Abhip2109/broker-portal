import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type BooleanQuoteOptions = 'carInsurance' | 'petInsurance' | 'fireProtection' | 'securityCameras' | 'gatedCommunity';

interface QuoteOptions {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  propertyType: string;
  sqFootage: number;
  yearBuilt: number;
  bedrooms: number;
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
  totalSteps = 5;
  basePremium = 500;
  finalPremium = this.basePremium;

  quote: QuoteOptions = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    propertyType: '',
    sqFootage: 0,
    yearBuilt: 0,
    bedrooms: 0,
    carInsurance: false,
    petInsurance: false,
    fireProtection: false,
    securityCameras: false,
    gatedCommunity: false
  };

  toggleInsurance(type: BooleanQuoteOptions) {
    this.quote[type] = !this.quote[type];
    this.calculatePremium();
  }

  toggleDiscount(feature: BooleanQuoteOptions) {
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
    if (this.step < this.totalSteps) {
      this.step++;
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  submitQuote() {
    alert(`Final Quote: $${this.finalPremium}`);
  }
}

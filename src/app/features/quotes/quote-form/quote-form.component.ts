import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // For *ngIf, *ngFor
import { FormsModule } from '@angular/forms';       // For [(ngModel)]

// Full model with all factors
interface QuoteOptions {
  // Step 1: Personal Info
  fullName: string;
  email: string;
  phone: string;
  dob: string; // Use string for simplicity; can be Date
  maritalStatus: string;
  occupation: string;

  // Step 2: Property Details
  address: string;
  zipCode: string;
  propertyType: string;
  sqFootage: number;
  buildingAge: number;
  bedrooms: number;
  floor: number;
  constructionType: string;
  fireHydrantDistance: string;

  // Step 3: Coverage Selection
  personalPropertyCoverage: number; // e.g. 20000, 50000, 100000
  liabilityCoverage: number;        // e.g. 100000, 300000, 500000
  deductible: number;               // e.g. 250, 500, 1000
  additionalLivingExpenseCoverage: boolean;
  earthquakeCoverage: boolean;
  floodCoverage: boolean;
  identityTheftProtection: boolean;

  // Step 4: Safety & Discounts
  fireProtection: boolean;
  securityCameras: boolean;
  gatedCommunity: boolean;
  smokeDetectors: boolean;
  sprinklerSystem: boolean;
  burglarAlarm: boolean;
  deadboltLocks: boolean;
  multiPolicyDiscount: boolean;
  nonSmoker: boolean;
  autoPayEnrollment: boolean;

  // Step 5: Insurance History & Credit
  previousClaims: number;
  yearsWithPreviousInsurer: number;
  hasContinuousCoverage: boolean;
  creditScoreBracket: string; // 'excellent' | 'good' | 'fair' | 'poor'
}

// Define a helper type for keys that are booleans
type BooleanFields = { [K in keyof QuoteOptions]: QuoteOptions[K] extends boolean ? K : never }[keyof QuoteOptions];

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent {
  // Steps for the progress bar
  step = 1;
  totalSteps = 6;
  steps = [
    { label: 'Personal Info' },
    { label: 'Property' },
    { label: 'Coverage' },
    { label: 'Safety' },
    { label: 'History & Credit' },
    { label: 'Review' }
  ];

  // Base Premium and Final Premium
  basePremium = 300;
  finalPremium = this.basePremium;

  // Initialize quote with default values
  quote: QuoteOptions = {
    // Step 1
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    maritalStatus: '',
    occupation: '',

    // Step 2
    address: '',
    zipCode: '',
    propertyType: '',
    sqFootage: 0,
    buildingAge: 0,
    bedrooms: 0,
    floor: 1,
    constructionType: '',
    fireHydrantDistance: '',

    // Step 3
    personalPropertyCoverage: 20000,
    liabilityCoverage: 100000,
    deductible: 500,
    additionalLivingExpenseCoverage: false,
    earthquakeCoverage: false,
    floodCoverage: false,
    identityTheftProtection: false,

    // Step 4
    fireProtection: false,
    securityCameras: false,
    gatedCommunity: false,
    smokeDetectors: false,
    sprinklerSystem: false,
    burglarAlarm: false,
    deadboltLocks: false,
    multiPolicyDiscount: false,
    nonSmoker: false,
    autoPayEnrollment: false,

    // Step 5
    previousClaims: 0,
    yearsWithPreviousInsurer: 0,
    hasContinuousCoverage: false,
    creditScoreBracket: ''
  };

  // Move to next step and recalc premium
  nextStep() {
    if (this.step < this.totalSteps) {
      this.step++;
      this.calculatePremium();
    }
  }

  // Move to previous step and recalc premium
  prevStep() {
    if (this.step > 1) {
      this.step--;
      this.calculatePremium();
    }
  }

  // Toggle a boolean field (only for fields of type boolean)
  toggleField(field: BooleanFields) {
    this.quote[field] = !this.quote[field];
    this.calculatePremium();
  }

  // Example: Specific toggle functions (if desired)
  toggleInsurance(type: 'carInsurance' | 'petInsurance') {
    // This function is available if you have dedicated keys,
    // otherwise use toggleField with proper BooleanFields union.
    // (If not needed, you can remove this.)
  }

  // Calculate user's age from dob
  getAgeFromDOB(): number {
    if (!this.quote.dob) return 0;
    const today = new Date();
    const birthDate = new Date(this.quote.dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  // MASTER Premium Calculation using various factors
  calculatePremium() {
    let premium = this.basePremium;

    // STEP 1: Personal Info Adjustments
    const age = this.getAgeFromDOB();
    if (age > 0 && age < 25) premium *= 1.05;  // +5% for young applicants
    if (age > 50) premium *= 0.95;              // -5% for older applicants
    if (this.quote.maritalStatus === 'married') premium *= 0.97; // -3%

    // STEP 2: Property Details
    if (this.quote.propertyType === 'house') premium += 50;
    if (this.quote.propertyType === 'condo') premium += 30;
    if (this.quote.sqFootage > 2000) premium += 75;
    else if (this.quote.sqFootage > 1000) premium += 30;
    if (this.quote.buildingAge > 30) premium += 20;
    if (this.quote.buildingAge < 5) premium -= 20;
    if (this.quote.bedrooms > 3) premium += 30;

    // STEP 3: Coverage Selection
    if (this.quote.personalPropertyCoverage === 50000) premium += 100;
    else if (this.quote.personalPropertyCoverage === 100000) premium += 200;
    if (this.quote.liabilityCoverage === 300000) premium += 50;
    else if (this.quote.liabilityCoverage === 500000) premium += 100;
    if (this.quote.deductible === 250) premium += 50;
    if (this.quote.deductible === 1000) premium -= 50;
    if (this.quote.additionalLivingExpenseCoverage) premium += 50;
    if (this.quote.earthquakeCoverage) premium += 80;
    if (this.quote.floodCoverage) premium += 60;
    if (this.quote.identityTheftProtection) premium += 40;

    // STEP 4: Safety & Discounts
    let discountPercent = 0;
    if (this.quote.fireProtection) discountPercent += 10;
    if (this.quote.securityCameras) discountPercent += 5;
    if (this.quote.gatedCommunity) discountPercent += 7;
    if (this.quote.smokeDetectors) discountPercent += 3;
    if (this.quote.sprinklerSystem) discountPercent += 4;
    if (this.quote.burglarAlarm) discountPercent += 5;
    if (this.quote.deadboltLocks) discountPercent += 2;
    if (this.quote.multiPolicyDiscount) discountPercent += 5;
    if (this.quote.nonSmoker) discountPercent += 5;
    if (this.quote.autoPayEnrollment) discountPercent += 2;

    // STEP 5: Insurance History & Credit
    premium += this.quote.previousClaims * 50;
    if (this.quote.yearsWithPreviousInsurer >= 3) discountPercent += 3;
    if (this.quote.yearsWithPreviousInsurer >= 5) discountPercent += 2;
    if (this.quote.hasContinuousCoverage) discountPercent += 5;
    switch (this.quote.creditScoreBracket) {
      case 'excellent':
        discountPercent += 5;
        break;
      case 'good':
        break;
      case 'fair':
        premium *= 1.05;
        break;
      case 'poor':
        premium *= 1.1;
        break;
    }

    // Apply total discount
    premium = premium - (premium * discountPercent) / 100;
    this.finalPremium = Math.max(50, +premium.toFixed(2));
  }

  // Submit the quote (simulate backend integration)
  submitQuote() {
    alert(
      `Quote Submitted!\nFinal Premium: $${this.finalPremium.toFixed(2)}\n\nDetails:\n${JSON.stringify(this.quote, null, 2)}`
    );
  }
}

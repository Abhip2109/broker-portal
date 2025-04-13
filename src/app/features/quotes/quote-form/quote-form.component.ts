import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  steps = [
    'Personal Info',
    'Property',
    'Coverage',
    'Safety',
    'History & Credit',
    'Review'
  ];
  step = 0;

  // Form groups for each step
  personalForm!: FormGroup;
  propertyForm!: FormGroup;
  coverageForm!: FormGroup;
  safetyForm!: FormGroup;
  historyForm!: FormGroup;

  finalPremium = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.personalForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      dob: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      occupation: ['']
    });

    this.propertyForm = this.fb.group({
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      propertyType: ['', Validators.required],
      sqFootage: [null, [Validators.required, Validators.min(100)]],
      buildingAge: [null, [Validators.required, Validators.min(0)]],
      bedrooms: [null, [Validators.required, Validators.min(0)]],
      floor: [1, [Validators.min(1)]],
      constructionType: ['', Validators.required],
      fireHydrantDistance: ['', Validators.required]
    });

    this.coverageForm = this.fb.group({
      personalPropertyCoverage: [20000, Validators.required],
      liabilityCoverage: [100000, Validators.required],
      deductible: [500, Validators.required],
      additionalLivingExpenseCoverage: [false],
      earthquakeCoverage: [false],
      floodCoverage: [false],
      identityTheftProtection: [false]
    });

    this.safetyForm = this.fb.group({
      fireProtection: [false],
      securityCameras: [false],
      gatedCommunity: [false],
      smokeDetectors: [false],
      sprinklerSystem: [false],
      burglarAlarm: [false],
      deadboltLocks: [false],
      multiPolicyDiscount: [false],
      nonSmoker: [false],
      autoPayEnrollment: [false]
    });

    this.historyForm = this.fb.group({
      previousClaims: [0, [Validators.min(0)]],
      yearsWithPreviousInsurer: [0, [Validators.min(0)]],
      hasContinuousCoverage: [false],
      creditScoreBracket: ['', Validators.required]
    });
  }

  // Return current active form group for validation
  get currentForm(): FormGroup {
    return [
      this.personalForm,
      this.propertyForm,
      this.coverageForm,
      this.safetyForm,
      this.historyForm
    ][this.step] as FormGroup;
  }

  next() {
    if (this.step < this.steps.length - 1) {
      if (this.currentForm.invalid) {
        this.currentForm.markAllAsTouched();
        return;
      }
      this.step++;
      if (this.step === this.steps.length - 1) {
        this.calculatePremium();
      }
    }
  }

  back() {
    if (this.step > 0) {
      this.step--;
    }
  }

  // A sample premium calculation based on some inputs
  calculatePremium() {
    let premium = 300;
    const coverage = this.coverageForm.value;
    premium += (coverage.personalPropertyCoverage / 10000) * 20;
    premium += (coverage.liabilityCoverage / 50000) * 15;
    premium -= (coverage.deductible / 500) * 5;
    // Additional adjustments could be added here...
    this.finalPremium = Math.max(50, Math.round(premium));
  }

  submit() {
    // Final submission logic (e.g., call your API)
    alert(`Quote Submitted!\nFinal Premium: $${this.finalPremium}\n\nDetails:\n${JSON.stringify(this.getAllFormValues(), null, 2)}`);
  }

  // Combine all form values into a single object for the review step.
  getAllFormValues() {
    return {
      personal: this.personalForm.value,
      property: this.propertyForm.value,
      coverage: this.coverageForm.value,
      safety: this.safetyForm.value,
      history: this.historyForm.value
    };
  }
}

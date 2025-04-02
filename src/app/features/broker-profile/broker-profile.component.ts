import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';  // ✅ Import this


@Component({
  selector: 'app-broker-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatDividerModule
  ],
  templateUrl: './broker-profile.component.html',
  styleUrls: ['./broker-profile.component.css']
})
export class BrokerProfileComponent {
  isEditing = false;
  darkMode = false;
  profileCompletion = 90; // Represents profile completeness or performance score

  broker = {
    profilePicture: 'assets/img/broker.jpg',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 123-456-7890',
    dob: '1985-06-15',
    address: '123 Main St, New York, USA',
    company: 'ABC Insurance Ltd.',
    licenseNumber: 'XYZ-789456',
    insuranceCompany: 'Lemonade Insurance',
    brokerLevel: 'Gold',
    rating: 4.8,
    activePolicies: 120,
    claimsProcessed: 85,
    averagePolicyValue: '$5,000',
    commissionEarned: '$85,000',
    quotesSubmitted: 320,
    policiesSold: 250,
    clientsHandled: 180
  };

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveProfile() {
    this.isEditing = false;
    this.profileCompletion = Math.min(this.profileCompletion + 5, 100);
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}

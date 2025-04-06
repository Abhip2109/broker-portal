// broker-profile.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-broker-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './broker-profile.component.html',
  styleUrls: ['./broker-profile.component.css']
})
export class BrokerProfileComponent {
  broker = {
    id: 101,
    name: 'John Carter',
    email: 'john.carter@rentguard.com',
    phone: '+1 (555) 987-6543',
    licenseNumber: 'BRK-00985',
    joiningDate: new Date('2021-06-15'),
    totalQuotes: 235,
    approvedPolicies: 178,
    pendingQuotes: 25,
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    bio: 'Experienced insurance broker with a focus on delivering exceptional customer service and smart coverage solutions.',
    skills: ['Quote Analysis', 'Policy Binding', 'Client Retention', 'Underwriting', 'Negotiation'],
    certifications: ['CISR', 'CIC', 'API'],
  };

  editMode = false;

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  saveProfile() {
    this.editMode = false;
    alert('Profile updated successfully!');
  }
} 

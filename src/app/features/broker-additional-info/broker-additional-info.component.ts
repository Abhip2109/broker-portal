import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-broker-additional-info',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './broker-additional-info.component.html',
  styleUrls: ['./broker-additional-info.component.css']
})
export class BrokerAdditionalInfoComponent {
  broker = {
    phone: '',
    bio: '',
    skills: '',
    certifications: ''
  };

  avatarPreview: string | ArrayBuffer | null = null;
  
  constructor(private router: Router) {}

  onFileChange(event: Event): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  submitBrokerInfo(): void {
    console.log('Broker Info Submitted:', {
      ...this.broker,
      avatar: this.avatarPreview
    });

    // Navigate or trigger backend save logic here
    alert('Profile submitted successfully!');
    this.router.navigate(['/dashboard2']);

  }
}

import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    fullName: 'John Carter',
    email: 'user@rentguard.com',
    phone: '+1 (555) 987-6543',
    lastLogin: new Date(),
    profilePicture: '',
    password: '',
    newPassword: '',
    confirmPassword: ''
  };

  editMode = false;
  passwordMode = false;
  previewUrl: string | ArrayBuffer | null = '';

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  togglePasswordChange() {
    this.passwordMode = !this.passwordMode;
  }

  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.previewUrl = reader.result);
      reader.readAsDataURL(file);
    }
  }

  saveChanges() {
    this.editMode = false;
    alert('User profile updated successfully!');
  }

  updatePassword() {
    if (this.user.newPassword !== this.user.confirmPassword) {
      alert('New password and confirmation do not match.');
      return;
    }
    alert('Password changed successfully!');
    this.passwordMode = false;
  }

  logout() {
    alert('Logged out successfully!');
    
    // TODO: Add actual logout logic (e.g., clearing tokens, redirecting)
  }
}

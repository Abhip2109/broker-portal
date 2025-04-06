// notifications.component.ts
import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications = [
    {
      title: 'New Quote Submitted',
      message: 'You submitted a new quote for Alice Johnson.',
      timestamp: new Date(Date.now() - 3600000),
      type: 'info'
    },
    {
      title: 'Policy Bound',
      message: 'Policy #RG-12453 has been successfully bound.',
      timestamp: new Date(Date.now() - 7200000),
      type: 'success'
    },
    {
      title: 'Profile Updated',
      message: 'Your profile was updated successfully.',
      timestamp: new Date(Date.now() - 10800000),
      type: 'warning'
    },
    {
      title: 'Quote Expired',
      message: 'Your quote for Bob Smith expired yesterday.',
      timestamp: new Date(Date.now() - 172800000),
      type: 'error'
    }
  ];

  clearAll() {
    this.notifications = [];
  }
} 

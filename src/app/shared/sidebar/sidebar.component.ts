import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed = false;

  @Output() toggleCollapse = new EventEmitter<boolean>();

  menuItems = [
    { label: 'Dashboard', link: '/dashboard2', icon: 'bi-speedometer2' },
    { label: 'Broker Profile', link: '/broker-profile', icon: 'bi-person' },
    { label: 'Quote List', link: '/quotes', icon: 'bi-file-earmark-text' },
    { label: 'Notifications', link: '/notifications', icon: 'bi-bell' },
    { label: 'Leaderboard', link: '/leaderboard', icon: 'bi-trophy' }
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.toggleCollapse.emit(this.isCollapsed);
  }   
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  brokers = [
    { name: "Alice Johnson", policies: 120, commission: 5000 },
    { name: "John Doe", policies: 100, commission: 4500 },
    { name: "Emma Smith", policies: 95, commission: 4200 },
    { name: "Michael Brown", policies: 80, commission: 3500 },
    { name: "Sophia Wilson", policies: 75, commission: 3300 }
  ];

  getBadgeClass(index: number): string {
    if (index === 0) return "bi bi-award-fill text-warning";
    if (index === 1) return "bi bi-award-fill text-secondary";
    if (index === 2) return "bi bi-award-fill text-bronze";
    return "bi bi-person-fill text-dark";
  }
}

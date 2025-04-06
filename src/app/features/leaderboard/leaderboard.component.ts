// leaderboard.component.ts
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
    {
      name: 'John Carter',
      avatar: 'https://i.pravatar.cc/150?img=1',
      quotes: 250,
      policies: 180,
      score: 95
    },
    {
      name: 'Alice Johnson',
      avatar: 'https://i.pravatar.cc/150?img=2',
      quotes: 210,
      policies: 160,
      score: 91
    },
    {
      name: 'Michael Smith',
      avatar: 'https://i.pravatar.cc/150?img=3',
      quotes: 190,
      policies: 145,
      score: 88
    },
    {
      name: 'Sophia Lee',
      avatar: 'https://i.pravatar.cc/150?img=4',
      quotes: 175,
      policies: 130,
      score: 84
    },
    {
      name: 'David Kim',
      avatar: 'https://i.pravatar.cc/150?img=5',
      quotes: 160,
      policies: 120,
      score: 81
    }
  ];
}

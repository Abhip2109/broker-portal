import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables } from 'chart.js'; // <-- Import registerables
import { ChartData, ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-dashboard2',
  standalone: true,
  imports: [CommonModule, RouterLink, BaseChartDirective],
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    // Register all chart features
    Chart.register(...registerables);
  }

  // Flag to indicate if we're in the browser
  isBrowser = false;

  // Sample stats
  stats = [
    { title: 'Total Quotes', value: 125, icon: 'bi-file-earmark-text', color: 'bg-primary', note: 'Updated Today' },
    { title: 'Bound Policies', value: 80, icon: 'bi-check-circle', color: 'bg-success', note: 'This Month' },
    { title: 'Commission Earned', value: '$4,500', icon: 'bi-currency-dollar', color: 'bg-warning', note: 'This Month' },
    { title: 'Pending Approvals', value: 15, icon: 'bi-hourglass-split', color: 'bg-danger', note: 'Awaiting Review' }
  ];

  // Line Chart: Commission Over Time
  public lineChartData: ChartData<'line'> = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        data: [1000, 1500, 1200, 1800],
        label: 'Commission ($)',
        backgroundColor: 'rgba(0,123,255,0.3)',
        borderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        fill: 'origin'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  };
  public lineChartType: ChartType = 'line';

  // Bar Chart: Daily Quotes Submitted
  public barChartData: ChartData<'bar'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [20, 25, 30, 18, 40, 22, 35],
        label: 'Quotes Submitted',
        backgroundColor: '#28a745'
      }
    ]
  };
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {},
      y: { beginAtZero: true }
    },
    plugins: {
      legend: { display: true }
    }
  };
  public barChartType: ChartType = 'bar';

  // Doughnut Chart: Policy Status Breakdown
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Active', 'Expired', 'Pending'],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ['#007bff', '#ffc107', '#dc3545']
      }
    ]
  };
  public doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  };
  public doughnutChartType: ChartType = 'doughnut';

  // constructor(
  //   @Inject(PLATFORM_ID) private platformId: object
  // ) {}

  ngOnInit(): void {
    // Check if we're in the browser environment
    this.isBrowser = isPlatformBrowser(this.platformId);

    // If needed, fetch dynamic data here and update chart arrays.
  }
}

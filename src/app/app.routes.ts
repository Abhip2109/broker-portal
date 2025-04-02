import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { QuoteFormComponent } from './features/quotes/quote-form/quote-form.component';
import { QuoteListComponent } from './features/quotes/quote-list/quote-list.component';
import { QuoteDetailComponent } from './features/quotes/quote-detail/quote-detail.component';
import { HomeComponent } from './shared/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { Dashboard2Component } from './features/dashboard2/dashboard2.component';
import { BrokerProfileComponent } from './features/broker-profile/broker-profile.component';
import { LeaderboardComponent } from './features/leaderboard/leaderboard.component';
import { NotificationsComponent } from './features/notifications/notifications.component';

export const routes: Routes = [
  // Public Routes
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quotes/new', component: QuoteFormComponent },
  // Broker-Protected Routes inside the Layout
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard2', component: Dashboard2Component },
      { path: 'broker-profile', component: BrokerProfileComponent },
      { path: 'leaderboard', component: LeaderboardComponent },
      { path: 'quotes/new', component: QuoteFormComponent },
      { path: 'quotes', component: QuoteListComponent },
      { path: 'quotes/:id', component: QuoteDetailComponent },
      { path: 'notifications', component: NotificationsComponent },
      // You can add more broker-related pages here
      { path: '', redirectTo: 'dashboard2', pathMatch: 'full' }
    ]
  },

  // Fallback route
  { path: '**', redirectTo: '' }
];

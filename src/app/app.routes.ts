import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { QuoteFormComponent } from './features/quotes/quote-form/quote-form.component';
import { QuoteListComponent } from './features/quotes/quote-list/quote-list.component';
import { QuoteDetailComponent } from './features/quotes/quote-detail/quote-detail.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'quotes/new', component: QuoteFormComponent },
  { path: 'quotes', component: QuoteListComponent },
  { path: 'quotes/:id', component: QuoteDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'login' }
];

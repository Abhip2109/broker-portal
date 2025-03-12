import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { QuoteFormComponent } from './features/quotes/quote-form/quote-form.component';
import { QuoteListComponent } from './features/quotes/quote-list/quote-list.component';
import { QuoteDetailComponent } from './features/quotes/quote-detail/quote-detail.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { Dashboard2Component } from './features/dashboard2/dashboard2.component';
import { HomeComponent } from './shared/home/home.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: HomeComponent }, // ✅ Home Page as default
  { path: 'login', component: LoginComponent },
  { path: 'quotes/new', component: QuoteFormComponent },
  { path: 'quotes', component: QuoteListComponent },
  { path: 'quotes/:id', component: QuoteDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard2', component:Dashboard2Component},
  { path: '**', redirectTo: '' } ,// 
];

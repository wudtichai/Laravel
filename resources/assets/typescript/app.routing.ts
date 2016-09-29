import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [
  AuthGuard,
  AuthService
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
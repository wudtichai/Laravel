import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

export const appRoutingProviders: any[] = [
  AuthGuard,
  AuthService
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AppComponent } from './app.component';
import { loginRoutes,
         authProviders }  from './login.routing';

const appRoutes: Routes = [
  ...loginRoutes
];

export const appRoutingProviders: any[] = [
  authProviders
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
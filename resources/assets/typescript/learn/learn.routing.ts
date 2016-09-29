import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';
import { LearnComponent } from './learn.component';
import { ConfirmComponent } from './confirm.component';

const learnRoutes: Routes = [
  {
    path: 'learn',
    component: LearnComponent,
    canActivate: [AuthGuard],
		children: [
      { path: '', component: ConfirmComponent }
    ]
  }
];

export const learnRouting: ModuleWithProviders = RouterModule.forChild(learnRoutes);

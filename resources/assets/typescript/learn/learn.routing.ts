import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';
import { LearnComponent } from './learn.component';

const learnRoutes: Routes = [
  {
    path: 'learn',
    component: LearnComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
        ],
      }
    ]
  }
];

export const learnRouting: ModuleWithProviders = RouterModule.forChild(learnRoutes);

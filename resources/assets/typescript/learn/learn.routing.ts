import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';
import { LearnComponent } from './learn.component';
import { MainComponent } from './main.component';
import { ConfirmComponent } from './confirm.component';
import { KnowledgeComponent } from './knowledge.component';
import { NatureComponent } from './nature.component';

const learnRoutes: Routes = [
  {
    path: 'learn',
    component: LearnComponent,
    canActivate: [AuthGuard],
	children: [
	  { path: '', component: MainComponent },
      { path: 'confirm', component: ConfirmComponent },
      { path: 'knowledge', component: KnowledgeComponent },
      { path: 'nature', component: NatureComponent }
    ]
  }
];

export const learnRouting: ModuleWithProviders = RouterModule.forChild(learnRoutes);

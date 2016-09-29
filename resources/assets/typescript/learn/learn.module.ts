import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { LearnComponent } from './learn.component';
import { learnRouting }   from './learn.routing';
import { AuthGuard }	  from './../auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    learnRouting
  ],
  declarations: [
    LearnComponent
  ]
})

export class LearnModule {}

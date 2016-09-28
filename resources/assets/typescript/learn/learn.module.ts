import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { LearnComponent } from './learn.component';
import { learnRouting }   from './learn.routing';

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

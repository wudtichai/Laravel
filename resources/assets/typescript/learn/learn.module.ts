import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { LearnComponent } from './learn.component';
import { ConfirmComponent } from './confirm.component';
import { learnRouting }   from './learn.routing';
import { StageService } from './stage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    learnRouting
  ],
  declarations: [
    LearnComponent,
    ConfirmComponent
  ],
  providers: [
  	StageService
  ]
})

export class LearnModule {}

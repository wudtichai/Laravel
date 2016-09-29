import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { learnRouting }   from './learn.routing';
import { StageService } from './stage.service';
import { LearnComponent } from './learn.component';
import { MainComponent } from './main.component';
import { ConfirmComponent } from './confirm.component';
import { KnowledgeComponent } from './knowledge.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    learnRouting
  ],
  declarations: [
    LearnComponent,
    MainComponent,
    ConfirmComponent,
    KnowledgeComponent
  ],
  providers: [
    StageService
  ]
})

export class LearnModule {}

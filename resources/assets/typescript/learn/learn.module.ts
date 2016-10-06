import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { learnRouting }   from './learn.routing';
import { StageService } from './stage.service';
import { KnowledgeService }    from './knowledge.service';
import { LearnComponent } from './learn.component';
import { MainComponent } from './main.component';
import { ConfirmComponent } from './confirm.component';
import { KnowledgeComponent } from './knowledge.component';
import { NatureComponent } from './nature.component';

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
    KnowledgeComponent,
    NatureComponent
  ],
  providers: [
    StageService,
    KnowledgeService
  ]
})

export class LearnModule {}

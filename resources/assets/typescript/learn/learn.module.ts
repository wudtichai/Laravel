import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { learnRouting }   from './learn.routing';
import { StageService } from './stage.service';
import { KnowledgeService }    from './knowledge.service';
import { NatureService }    from './nature.service';
import { TestService } from './test.service';
import { SatisfyService } from './satisfy.service';
import { LearnComponent } from './learn.component';
import { MainComponent } from './main.component';
import { ConfirmComponent } from './confirm.component';
import { KnowledgeComponent } from './knowledge.component';
import { NatureComponent } from './nature.component';
import { LessonComponent } from './lesson.component';
import { TestComponent } from './test.component';
import { SatisfyComponent } from './satisfy.component';

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
    NatureComponent,
    LessonComponent,
    TestComponent,
    SatisfyComponent
  ],
  providers: [
    StageService,
    KnowledgeService,
    NatureService,
    TestService,
    SatisfyService
  ]
})

export class LearnModule {}

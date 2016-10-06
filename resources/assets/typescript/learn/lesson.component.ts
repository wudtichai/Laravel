import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute,Params }      from '@angular/router';
import { User } from './../user';
import { AuthService } from './../auth.service';
import { StageService } from './stage.service';


@Component({
  templateUrl: 'app/learn/lesson.component.html',
  styleUrls: ['app/learn/lesson.component.css']
})
export class LessonComponent { 

  private user:User;
  private stage:number;
  private trustedUrlPDF;
  private interact:boolean

  constructor(public route: ActivatedRoute, 
      private authService: AuthService, 
      private stageService: StageService, 
      private sanitizer: DomSanitizer) { 
    authService.userUpdated$.subscribe(
      (user) => {
        this.fetchUser(user);
        this.getPDFUrl();
      }
    );

    stageService.getStage()
    .subscribe(
      () => {
        this.fetchStage();
      });
  }

  fetchUser(user:User) {
    this.user = user;
    this.interact = this.user.id % 2 == 0 ? false:true;
  }

  fetchStage() {
    this.stage = this.stageService.stage;
    this.getPDFUrl();
  }

  getPDFUrl() {
    let interact_text;
    if(this.interact) {
      interact_text = "interact";
    } else {
      interact_text = "noninteract";
    }
    let lesson = this.stage - 2;
    let pdf = "pdf/ebook-" + interact_text + "-" + lesson + ".pdf";
    this.trustedUrlPDF = this.sanitizer.bypassSecurityTrustResourceUrl(pdf);
  }

  ngOnInit() {
    this.fetchUser(this.authService.user);
    this.fetchStage();
  }

}
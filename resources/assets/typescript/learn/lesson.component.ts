import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute,Params } from '@angular/router';
import { User } from './../user';
import { AuthService } from './../auth.service';
import { StageService } from './stage.service';


@Component({
  templateUrl: 'app/learn/lesson.component.html',
  styleUrls: ['app/learn/lesson.component.css']
})
export class LessonComponent { 

  private user:User;
  private id:number ;
  private next:string ;
  private previous:string ;
  private trustedUrlPDF;
  private trustedVideoUrl;
  private interact:boolean

  constructor(public route: ActivatedRoute, 
      private authService: AuthService, 
      private stageService: StageService, 
      private sanitizer: DomSanitizer) { 

    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
      this.stageService.updateStage(this.id+2);
      if(this.id == 3) {
        this.next = "/learn/test";
      } else {
        this.next = "/learn/lesson/" + (this.id + 1);
      }
      this.previous = "/learn/lesson/" + (this.id - 1);
      this.getUrl();
    });

    authService.userUpdated$.subscribe(
      (user) => {
        this.fetchUser(user);
        this.getUrl();
      }
    );
  }

  fetchUser(user:User) {
    this.user = user;
    this.interact = this.user.id % 2 == 0 ? false:true;
  }

  getUrl() {
    let interact_text;
    if(this.interact) {
      interact_text = "interact";
    } else {
      interact_text = "noninteract";
    }
    let pdf = "pdf/ebook-" + interact_text + "-" + this.id + ".pdf";
    let videoUrl = "video/TimeValue" + this.id + ".mp4";
    this.trustedUrlPDF = this.sanitizer.bypassSecurityTrustResourceUrl(pdf);
    this.trustedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  ngOnInit() {
    this.fetchUser(this.authService.user);
    this.getUrl();
  }

}
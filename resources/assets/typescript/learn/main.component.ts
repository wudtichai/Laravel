import { Component } from '@angular/core';
import { StageService } from './stage.service';
import { Router }from '@angular/router';

@Component({  
  template: '<img src="images/loading.gif" style="display:block;margin:80px auto;">',
})
export class MainComponent { 

  constructor(private stageService: StageService, public router: Router) { }

  ngOnInit() {
    this.stageService.getStage()
        .subscribe(
          () => {
            if(this.stageService.stage == 0) {
              this.router.navigate(['/learn/confirm']);
            } else if(this.stageService.stage == 1) {
              this.router.navigate(['/learn/knowledge']);
            } else if(this.stageService.stage == 2) {
              this.router.navigate(['/learn/nature']);
            } else if(this.stageService.stage == 3) {
              this.router.navigate(['/learn/lesson',1]);
            } else if(this.stageService.stage == 4) {
              this.router.navigate(['/learn/lesson',2]);
            } else if(this.stageService.stage == 5) {
              this.router.navigate(['/learn/lesson',3]);
            } else if(this.stageService.stage == 6) {
              this.router.navigate(['/learn/test']);
            } else if(this.stageService.stage == 7) {
              this.router.navigate(['/learn/satisfy']);
            } else {
              this.router.navigate(['/learn/end']);
            }
          });
  }

}

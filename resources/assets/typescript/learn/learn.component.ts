import { Component } from '@angular/core';
import { StageService } from './stage.service';
import { Router }      from '@angular/router';

@Component({
  templateUrl: 'app/learn/learn.component.html',
  styleUrls: ['app/learn/learn.component.css']
})
export class LearnComponent { 
  stage :number;
  bar: number;
  constructor(private stageService: StageService) { }

  ngOnInit() {
    this.stageService.stageUpdated$.subscribe(
      (stage) => {
        this.stage = stage;
        if(this.stage == 8) {
          this.bar = 100;
        } else {
          this.bar = Math.round(this.stage/7*100 - 100/14);
        }
      }
    ); 
  }

}
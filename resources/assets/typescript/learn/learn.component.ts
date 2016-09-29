import { Component } from '@angular/core';
import { StageService } from './stage.service';

@Component({
  templateUrl: 'app/learn/learn.component.html',
  styleUrls: ['app/learn/learn.component.css']
})
export class LearnComponent { 
  stage :number;
  bar: number;
  constructor(private stageService: StageService) { }

  ngOnInit() {
    this.getStage();
  }

  getStage() {
    this.stageService.stage()
        .subscribe(
          (res) => {
            this.stage = res.data.stage;
            this.calculateBar();
          });

  }

  calculateBar(){
    this.bar = Math.round(this.stage/7*100);
  }

}
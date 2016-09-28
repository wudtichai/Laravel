import { Component } from '@angular/core';
import { StageService } from './stage.service'

@Component({
  selector: 'learn',
  templateUrl: 'app/learn.component.html',
  providers: [StageService]
})
export class LearnComponent { 
  stage :number;
  constructor(private stageService: StageService) { }

  ngOnInit() {
    this.getStage();
  }

  getStage() { 
    this.stageService.stage()
        .subscribe(res => this.stage = res.data.stage);
  }

}
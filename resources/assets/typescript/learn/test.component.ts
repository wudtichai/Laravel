import { Component } from '@angular/core';
import { TEST_LIST } from './test-list';
import { StageService } from './stage.service';
import { TestService } from './test.service';
import { Router }      from '@angular/router';

declare var $:any;
declare var jQuery:any;

@Component({
  templateUrl: 'app/learn/test.component.html',
  styleUrls: ['app/learn/test.component.css']
})

export class TestComponent { 

  testList = TEST_LIST;

  constructor(private stageService: StageService, private testService: TestService, public router: Router) {
    stageService.setStage(6).subscribe();
    jQuery.validator.setDefaults({
      errorPlacement: function(error, element) {
      }
    });
  }

  onSubmit() {
    if($("#test-form").valid()){
      this.testService.send(this.prepareAnswer()).subscribe(
        () => {
          this.resetForm();
          this.router.navigate(['/learn']);
        }
      );
    } else {
      alert('กรุณาตอบทุกข้อ');
    }
  }

  resetForm() {
    $('input[type=radio]', '#test-form').prop('checked', false);
  }

  prepareAnswer() {
    let answer = {};
    for (let i = 1;i <= this.testList.length; i++) {
       answer['t'+i] = $('input[name=t' + i + ']:checked', '#test-form').val()
    }
    return answer;
  }
}
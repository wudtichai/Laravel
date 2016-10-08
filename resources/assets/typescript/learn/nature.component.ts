import { Component } from '@angular/core';
import { QUESTION_LIST } from './question-list';
import { NatureService }    from './nature.service';
import { AuthService }    from './../auth.service';
import { Router }      from '@angular/router';

@Component({
  templateUrl: 'app/learn/nature.component.html',
  styleUrls: ['app/learn/nature.component.css'],
  providers: [NatureService]
})

export class NatureComponent { 

  questionList = QUESTION_LIST;

  private answer;

  constructor(private natureService: NatureService, private authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.resetAnswer();
  }

  resetAnswer() {
    this.answer = {};
    for (let i = 1;i <= this.questionList.length; i++) {
      for (let j = 1; j <= 4; j++) {
        this.answer['q'+i+'_'+j] = {selected:false}; 
      }
    }
  }

  onSubmit() {
    this.natureService.send(this.answer).subscribe(
      (res) => {
        this.resetAnswer();
        this.authService.updateUser(res.data.user);
        this.router.navigate(['/learn/lesson', 1]);
      }
    );
  }
}
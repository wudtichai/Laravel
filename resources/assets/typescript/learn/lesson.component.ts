import { Component } from '@angular/core';
import { Router }      from '@angular/router';

@Component({
  template: 'Lesson{{id}}' 
})
export class LessonComponent { 

  private id:number;

  constructor(public router: Router) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

}
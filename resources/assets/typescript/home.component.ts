import { Component } from '@angular/core';
import { AuthService } from './auth.service'
import { Router }from '@angular/router';

@Component({  
  template: '<img src="images/loading.gif" style="display:block;margin:80px auto;">',
})
export class HomeComponent { 

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.check().subscribe(
      () => {
        if (this.authService.isLoggedIn) {
          this.router.navigate(['/learn']);
        } else {
          this.router.navigate(['/login']);
        }
      },
      () => {
        this.router.navigate(['/login']);
      }
    );
  }

}

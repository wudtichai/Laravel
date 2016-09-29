import { Component } from '@angular/core';
import { AuthService } from './auth.service'
import { User } from './user';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                         from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent { 

  isLoggedIn: boolean = false;
  user :User;

  constructor(private authService: AuthService, private router: Router) {
    authService.userUpdated$.subscribe(
      (user) => {
        this.isLoggedIn = true;
        this.user = user;
      }
    ); 
  }

  ngOnInit() {
    this.checkAuth(); 
  }

  checkAuth() {
    this.authService.check().subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.router.navigate(['/learn']);
      }
    });
  }

  logout() {
    this.authService.logout().subscribe(() => {
      if (!this.authService.isLoggedIn) {
        delete this.user;
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
      }
    });
  }
}

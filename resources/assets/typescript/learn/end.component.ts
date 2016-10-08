import { Component } from '@angular/core';
import { AuthService } from './../auth.service'
import { Router } from '@angular/router';

@Component({
  templateUrl: 'app/learn/end.component.html',
  styleUrls: ['app/learn/end.component.css']
})
export class EndComponent { 

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout().subscribe(() => {
        this.router.navigate(['/login']);
    });
  }

}
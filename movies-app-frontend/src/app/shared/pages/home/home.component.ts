import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor( private router: Router, private authService: AuthService ){
    if(this.authService.user != undefined){
      this.router.navigateByUrl('movies/list');
    }
  }

  login(){
    this.router.navigateByUrl('/auth/login');
  }

}

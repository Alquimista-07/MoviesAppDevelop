import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 10px;
    }
  `]
})
export class HomeComponent {

  constructor( private router: Router, private authService: AuthService, private moviesService: MoviesService ){}

  get user(){
    return this.moviesService.user;
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }

  login(){
    this.router.navigateByUrl('/auth/login');
  }

}

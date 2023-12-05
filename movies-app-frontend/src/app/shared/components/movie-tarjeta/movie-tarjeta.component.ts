import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';
import { MoviesService } from '../../../movies/services/movies.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-tarjeta',
  templateUrl: './movie-tarjeta.component.html',
  styles: [`
    mat-card {
      margin-top: 20px;
    }
  `]
})
export class MovieTarjetaComponent {

  @Input() movie!: Movie;
  _favorites: Movie[] = [];

  constructor( private authService: AuthService ){ }

  get auth() {
    return this.authService.auth;
  }

}

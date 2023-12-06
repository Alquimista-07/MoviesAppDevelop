import { Component, Input, AfterContentInit, AfterContentChecked } from '@angular/core';
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
export class MovieTarjetaComponent implements AfterContentChecked {

  @Input() movie!: Movie;
  _favorites: Movie[] = [];
  isFavorite: boolean = false;

  constructor( private authService: AuthService, private moviesService: MoviesService ){ }
  
  ngAfterContentChecked(): void {
    this.validaFavorito(this.movie.id);
  }

  get auth() {
    return this.authService.auth;
  }

  validaFavorito(idFavorito: string){
    this.isFavorite = false;
    this.isFavorite = this.moviesService.validarFavorito(idFavorito);
  }

}

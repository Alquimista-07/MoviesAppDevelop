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

  constructor(private moviesService: MoviesService, private authService: AuthService, private router: Router){ }

  get auth() {
    return this.authService.auth;
  }

  addFavorite(movie: Movie){

    let isFavorite = { isFavorite: true };
    let newMovie = { ...movie, ...isFavorite };

    this.moviesService.addFavorite(newMovie);
    Swal.fire({
      title: "Well done",
      text: "The movie has been added to your favorites list.",
      icon: "success"
    });
  }

  removeFavorite(idFavorite: string){

    let hayValores = localStorage.getItem("favorites")
    this._favorites = JSON.parse( localStorage.getItem( 'favorites' )! );
    
    if(hayValores){
      const resultado = this._favorites.filter(favorite => favorite.id != idFavorite);
      localStorage.setItem("favorites",JSON.stringify(resultado));
    }

    this.router.navigateByUrl('movies/list');

  }

}

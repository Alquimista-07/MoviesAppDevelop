import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Movie } from 'src/app/shared/interfaces/movies.interface';
// import { Favorites } from 'src/app/shared/interfaces/favorites.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent {

  noFavorites!: boolean;

  constructor( private moviesService: MoviesService, private authService: AuthService ) {
     this.moviesService.loadFavorites(this.authService.auth.id); 
     this.validaFavoritos();
  }

  get favorites(){
    return this.moviesService.favorites;
  }
  
  validaFavoritos(){
    this.noFavorites = this.moviesService.noHayFavorito();
    console.log(this.noFavorites);
  }

}

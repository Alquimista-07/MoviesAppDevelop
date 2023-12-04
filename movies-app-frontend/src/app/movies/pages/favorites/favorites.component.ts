import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../shared/interfaces/movies.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent {

  // Propiedad para las películas favoritas
  favorites: Movie[] = [];

  constructor( ) {
    if(localStorage.getItem('favorites')){
      this.favorites = JSON.parse( localStorage.getItem( 'favorites' )! );
    }
  }
  

}

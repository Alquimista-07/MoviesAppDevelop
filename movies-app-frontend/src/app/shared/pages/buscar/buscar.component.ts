import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Movie } from '../../interfaces/movies.interface';
import { MoviesService } from '../../../movies/services/movies.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent {

  termino: string = '';

  movies: Movie[] = [];

  // La película seleccionada es una película o puede ser undefined
  movieSeleccionada: Movie | undefined;

  constructor( private moviesService: MoviesService ){}

  buscando(){

    // Entra solo si se colocan 2 o más letras en el input
    if( this.termino.length >= 2 ){
      // Con trim quitamos espacios adelante y atrás
      this.moviesService.getSugerencias( this.termino.trim() )
          .subscribe( movies => this.movies = movies );
    }
    else {
      this.movies = [];
    }

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent  ){

    if( !event.option.value ){
      this.movieSeleccionada = undefined;
      return;
    }

    const movie: Movie = event.option.value;
    // Ahora para que no aparezca la representación de object en el input sino 
    // el nombre entonces hacemos lo siguiente:
    this.termino = movie.title;
    // Ahora traemos la información del héroe que se seleccionó
    // adicionalmnete colocamos el simbolo ! ya que el heroe puede venir
    // vacío entonces para que lo deje pasar agregamos dicho simbolo
    this.moviesService.getMovieById( movie.id! )
        .subscribe( movie => this.movieSeleccionada = movie );
  }

}


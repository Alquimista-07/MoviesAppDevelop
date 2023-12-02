import { Component } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  // Propiedad para las películas
  movies: Movie[] = [];

  selected = '';

  constructor(private moviesService: MoviesService){ }

  ngOnInit(): void {
    this.moviesService.getMovies()
        .subscribe(movies => this.movies = movies);
  }

  ordenar(selected: string){

    console.log(this.movies);

    switch (selected) {
      case 'title':
        this.ordenarTitulo();
        break;
      
      case 'releasedDate':
        this.ordenarFecha();
        break;
    
      default:
        break;
    }
  }

  ordenarTitulo(){
    this.movies.sort(function( a, b ) {
      if(a.title < b.title)
        return -1;
      else if (a.title > b.title)
        return 1;
      else
        return 0;
    });
  }

  ordenarFecha(){
    this.movies.sort(function( a, b ) {
      if(a.releasedDate.year < b.releasedDate.year)
        return -1;
      else if (a.releasedDate.year > b.releasedDate.year)
        return 1;
      else
        return 0;
    });
  }

}

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

  constructor(private moviesService: MoviesService){ }

  ngOnInit(): void {
    this.moviesService.getMovies()
        .subscribe(movies => this.movies = movies);
  }

}

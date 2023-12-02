import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';
import { MoviesService } from '../../services/movies.service';

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

  constructor(private moviesService: MoviesService){ }

  addFavorite(movie: Movie){
    this.moviesService.addFavorite(movie);
  }

}

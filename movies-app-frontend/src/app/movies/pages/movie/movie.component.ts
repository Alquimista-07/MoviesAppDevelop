import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Movie } from '../../interfaces/movies.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class MovieComponent implements OnInit {

  movie!: Movie;

  constructor( private activatedRoute: ActivatedRoute, private moviesService: MoviesService, private router: Router ){}

  ngOnInit(): void {
    // Obtener id
    this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.moviesService.getMovieById(id) )
        )
        .subscribe( movie => this.movie = movie );
        console.log(this.movie);
  }

  volver() {
    this.router.navigate(['/movies/list']);
  }

}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies/services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movies-app';

  movies: any;

  constructor(private moviesService: MoviesService){}
 
  ngOnInit(): void {
    this.moviesService.getMovies()
        .subscribe(
          {
            next: (movies: any) => {
              console.log(movies);
            },
            error: (err: any) => console.log(err),
            complete: () => console.log('Completado')
          }
        );
  }
}

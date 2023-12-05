import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Movie } from '../../interfaces/movies.interface';
import { MoviesService } from '../../../movies/services/movies.service';
import { AuthService } from 'src/app/auth/services/auth.service';

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
  isFavorite!: boolean;

  constructor( private activatedRoute: ActivatedRoute, 
               private moviesService: MoviesService, 
              private router: Router,
              private authService: AuthService ){ }

  ngOnInit(): void {
    // Obtener id
    this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.moviesService.getMovieById(id) )
        )
        .subscribe( movie => {
          this.movie = movie
          this.validaFavorito(this.movie.id);
        } );
  }

  get auth() {
    return this.authService.auth;
  }

  volver() {
    if(sessionStorage.getItem('user')){
      this.router.navigate(['/movies/list']);
    }
    else{
      this.router.navigate(['/home/list']);
    }
  }

  addFavorite(movieId: string){
    this.moviesService.addFavorite(movieId, this.authService.auth.id);
    this.router.navigateByUrl('/movies/favorites');
  }

  removeFavorite(idFavorite: string, userId: string){
    this.moviesService.removeFavorite(idFavorite, userId);
    this.router.navigateByUrl('/movies/list');
  }

  validaFavorito(idFavorito: string){
    this.isFavorite = false;
    this.isFavorite = this.moviesService.validarFavorito(idFavorito);
  }

}

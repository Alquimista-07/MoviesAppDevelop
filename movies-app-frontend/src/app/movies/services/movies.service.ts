import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../../shared/interfaces/movies.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = environment.baseUrl;
  private _favorites: Movie[] = [];


  get favorites() {
    return {...this._favorites};
  }

  constructor(private http: HttpClient) {

    if(localStorage.getItem('favorites')){
      this._favorites = JSON.parse(localStorage.getItem('favorites')!)
    }
  }

  getMovies(): Observable<Movie[]>{
    const url = `${this.baseUrl}/movies`;
    return this.http.get<Movie[]>( url );
  }

  getMovieById( id: string ): Observable<Movie> {
    const url = `${this.baseUrl}/movies/${id}`;
    return this.http.get<Movie>(url);
  }

  getSugerencias(termino: string): Observable<Movie[]> {
    const cantidadTerminos = 6;
    const url = `${ this.baseUrl }/movies?q=${termino}&_limit=${cantidadTerminos}`;
    return this.http.get<Movie[]>(url);
  }

  addFavorite(movie: Movie){
      if( !this._favorites.includes(movie)){
        // Insertamos
        this._favorites.unshift(movie);
        localStorage.setItem('favorites', JSON.stringify(this._favorites));
      }

  }

}

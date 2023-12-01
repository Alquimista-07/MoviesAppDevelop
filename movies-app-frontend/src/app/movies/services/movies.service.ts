import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../interfaces/movies.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
    const url = `${this.baseUrl}/movies`;
    return this.http.get<Movie[]>( url );
  }

  getMovieById( id: string ): Observable<Movie> {
    const url = `${this.baseUrl}/movies/${id}`;
    console.log(url);
    return this.http.get<Movie>(url);
  }

  getSugerencias(termino: string): Observable<Movie[]> {
    const cantidadTerminos = 6;
    const url = `${ this.baseUrl }/movies?q=${termino}&_limit=${cantidadTerminos}`;
    return this.http.get<Movie[]>(url);
  }

}

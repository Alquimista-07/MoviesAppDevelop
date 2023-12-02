import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../interfaces/movies.interface';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = environment.baseUrl;
  private _user: User | undefined;
  private _favorites: string[] = [];

  get user(): User{
    return {...this._user!};
  }

  constructor(private http: HttpClient) {
    if(localStorage.getItem( 'user' )){
      console.log('Entro user');
      this._user = JSON.parse( localStorage.getItem('user')! );
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

}

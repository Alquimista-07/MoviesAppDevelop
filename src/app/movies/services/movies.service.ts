import { Injectable } from '@angular/core';

// NOTA: Importacion apiServer que carga mi archivo local_movies.json
import { apiServer } from '../../apiServer'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // Traer data desde apiServer
  private ApiUrl: string = apiServer.serverUrl;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
    const url = `${this.ApiUrl}`;
    return this.http.get<Movie[]>( url );
  }

  getMovieById( id: string ): Observable<Movie> {
    const url = `${this.ApiUrl}/movies/${id}`;
    console.log(url);
    return this.http.get<Movie>(url);
  }
}

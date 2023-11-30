import { Injectable } from '@angular/core';

// NOTA: Importacion apiServer que carga mi archivo local_movies.json
import { apiServer } from '../../apiServer'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // Traer data desde apiServer
  private ApiUrl: string = apiServer.serverUrl;

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(`${this.ApiUrl}`);
  }
}

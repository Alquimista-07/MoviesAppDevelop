import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Movie } from '../../shared/interfaces/movies.interface';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = environment.baseUrl;
  private _favoritesLocal: string[] = [];
  private _favorites: Movie[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {
    if (localStorage.getItem(`favorites_${this.authService.auth.id}`)) {
      this._favoritesLocal = JSON.parse(localStorage.getItem(`favorites_${this.authService.auth.id}`)!);
    }
  }

  get favorites(): Movie[]{
    return [...this._favorites];
  }

  getMovies(): Observable<Movie[]> {
    const url = `${this.baseUrl}/movies`;
    return this.http.get<Movie[]>(url);
  }

  getMovieById(id: string): Observable<Movie> {
    const url = `${this.baseUrl}/movies/${id}`;
    return this.http.get<Movie>(url);
  }

  getSugerencias(termino: string): Observable<Movie[]> {
    const cantidadTerminos = 6;
    const url = `${this.baseUrl}/movies?q=${termino}&_limit=${cantidadTerminos}`;
    return this.http.get<Movie[]>(url);
  }

  addFavorite(movieId: string = '', userId: string) {

    movieId = movieId.trim().toLowerCase();

    if (!this._favoritesLocal.includes(movieId)) {

      this._favoritesLocal.unshift(movieId);

      Swal.fire({
        title: "Well done",
        text: "The movie has been added to your favorites list.",
        icon: "success"
      });

      localStorage.setItem(`favorites_${userId}`, JSON.stringify(this._favoritesLocal));

    }

  }

  removeFavorite(idFavorite: string, userId: string){

    this._favoritesLocal = [];

    let hayValores = JSON.stringify(localStorage.getItem(`favorites_${userId}`));
    this._favoritesLocal = JSON.parse( localStorage.getItem(`favorites_${userId}`)! );

    if(!hayValores.includes('[]')){
      const eliminar = this._favoritesLocal.includes(idFavorite);
      if(eliminar){
        const resultado = this._favoritesLocal.filter(favorito => favorito != idFavorite);
        localStorage.setItem(`favorites_${userId}`, JSON.stringify(resultado));

        Swal.fire({
          title: "Well done",
          text: "The movie has been removed to your favorites list.",
          icon: "success"
        });

      }
      }

  }

  loadFavorites(userId: string) {

    this._favorites = [];
    this._favoritesLocal = JSON.parse(localStorage.getItem(`favorites_${this.authService.auth.id}`)!)

    if (localStorage.getItem(`favorites_${userId}`)) {

      for (let i = 0; i < this._favoritesLocal.length; i++) {

        const id = this._favoritesLocal[i].trim().toLowerCase();
        const url = `${this.baseUrl}/movies/${id}`;

        this.http.get<Movie>(url).subscribe((resp) => {
          this._favorites.push(resp);
        });

      }

    }
  }

  validarFavorito(idFavorito: string): boolean{
    return this._favoritesLocal.includes(idFavorito);
  }

  noHayFavorito(): boolean{
    let val = JSON.parse(localStorage.getItem(`favorites_${this.authService.auth.id}`)!);
    if(Object.keys(val).length === 0){
      return true;
    }
    return false;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;
  private user: string[] = [];

  get auth(): Auth {
    return { ...this._auth! };
  }

  constructor( private http: HttpClient ) { }

  verificaAutenticacion(): Observable<boolean> {

    if( !localStorage.getItem( 'token' ) ) {
      return of(false);
    }

    const url = `${ this.baseUrl }/users/1`;

    return this.http.get<Auth>( url )
                .pipe(
                  map( auth => {
                    this._auth = auth;
                    return true;
                  })
                );

  }

  login() {
    const url = `${ this.baseUrl }/users/1`;
    return this.http.get<Auth>( url )
               .pipe(
                 tap( auth => this._auth = auth ),
                 tap( auth => {
                  localStorage.setItem( 'token', auth.id )
                  localStorage.setItem('user', JSON.stringify( auth ))
                 })
               );
  }

  logout() {
    this._auth = undefined
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, Observable, of, map } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;
  private userId: string = '';

  get auth(): Auth {
    return { ...this._auth! };
  }

  get user(): User {
    return JSON.parse(sessionStorage.getItem('user')!);
  }

  constructor(private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean> {

    if (!localStorage.getItem('token')) {
      return of(false);
    }

    this.userId = JSON.parse(localStorage.getItem('token')!);

    const url = `${this.baseUrl}/users/${this.userId}`;

    return this.http.get<Auth>(url)
      .pipe(
        map(auth => {
          this._auth = auth;
          return true;
        })
      );

  }

  login(userId: string) {
    const url = `${this.baseUrl}/users/${userId}`;
    return this.http.get<Auth>(url)
      .pipe(
        tap(auth => this._auth = auth),
        tap(auth => {
          localStorage.setItem('token', auth.id)
          sessionStorage.setItem('user', JSON.stringify(auth))
        })
      );
  }

  logout() {
    this._auth = undefined
    localStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }

}

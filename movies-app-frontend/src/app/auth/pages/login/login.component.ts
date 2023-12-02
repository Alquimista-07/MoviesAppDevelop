import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor( private router: Router, private authService: AuthService ){}

  login(){

    // Acá debería ir al backend y validar el usuario

    this.authService.login()
        .subscribe(resp => {
          
          if(resp.id) {
            this.router.navigate(['./movies']);
          }

        });
  }

}

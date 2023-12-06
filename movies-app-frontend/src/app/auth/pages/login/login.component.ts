import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  userId: string = '1';

  miFormulario: FormGroup = this.fb.group({
    userId: [ this.userId, Validators.required ]
  });

  constructor( private router: Router, private authService: AuthService, private fb: FormBuilder ){}

  login(){

    // Extraemos los valores del formulario
    const { userId } = this.miFormulario.value;

    // Acá debería ir al backend y validar el usuario

    this.authService.login(userId)
        .subscribe(resp => {
          if(resp.id) {
            this.router.navigate(['./movies']);
          }

        });
  }

}

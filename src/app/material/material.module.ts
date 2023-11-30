import { NgModule } from '@angular/core';

// NOTA: Archivo de barril componetes de Angular Material
//       Entonces en este modulo vamos a importar todo lo correspondiente a Angular Material
// Documentación Angular Material: https://material.angular.io/
// Documentacion Iconos: https://fonts.google.com/icons?selected=Material+Icons:bookmark

// Importamos el autocomplete
import { MatAutocompleteModule } from '@angular/material/autocomplete';
// Importamos los botones
import { MatButtonModule } from '@angular/material/button';
// Importamos el dialog 
import { MatDialogModule } from '@angular/material/dialog';
// Importamos el mat form field que también lo necesitamos para el autocomplete
import { MatFormFieldModule } from '@angular/material/form-field';
// Importamos el grid
import { MatGridListModule } from '@angular/material/grid-list';
// Importamos el input que también se necesita para el autocomplete
import { MatInputModule } from '@angular/material/input';
// Importamos los iconos
import { MatIconModule } from '@angular/material/icon';
// Importamos los card
import { MatCardModule } from '@angular/material/card';
// Importamos la lista
import { MatListModule } from '@angular/material/list';
// Importamos el progress spiner
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// Importamos el select
import { MatSelectModule } from '@angular/material/select'
// Importamos el sidenav
import { MatSidenavModule } from '@angular/material/sidenav';
// Importamos el snackbar
import { MatSnackBarModule } from '@angular/material/snack-bar';
// Importamos el toolbar
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importamos el flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Importamos el modulo especializado de los componentes de Angular Material
import { MaterialModule } from '../material/material.module';

// Importamos las rutas hijas para heroes
import { MoviesRoutingModule } from './movies-routing.module';

// Componentes
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MovieTarjetaComponent } from './components/movie-tarjeta/movie-tarjeta.component';

import { ImagenPipe } from './pipes/imagen.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    ImagenPipe,
    MovieTarjetaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }

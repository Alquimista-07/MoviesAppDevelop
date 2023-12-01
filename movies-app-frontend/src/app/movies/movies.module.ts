import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos el forms module para habilitar el ng-model
import { FormsModule } from '@angular/forms';

// Modulo Youtube Player
import { YouTubePlayerModule } from '@angular/youtube-player';

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
import { MovieComponent } from './pages/movie/movie.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    ImagenPipe,
    MovieTarjetaComponent,
    MovieComponent,
    BuscarComponent,
    YoutubePlayerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    MoviesRoutingModule,
    YouTubePlayerModule
  ]
})
export class MoviesModule { }

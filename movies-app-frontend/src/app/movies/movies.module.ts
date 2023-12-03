import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos el forms module para habilitar el ng-model
import { FormsModule } from '@angular/forms';

// Modulo Youtube Player
import { YouTubePlayerModule } from '@angular/youtube-player';

// Importamos el flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

// SWal2
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// Importamos el modulo especializado de los componentes de Angular Material
import { MaterialModule } from '../material/material.module';

// Importamos las rutas hijas para heroes
import { MoviesRoutingModule } from './movies-routing.module';

// Componentes
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from '../shared/pages/listado/listado.component';
import { MovieTarjetaComponent } from '../shared/components/movie-tarjeta/movie-tarjeta.component';

import { ImagenPipe } from '../shared/pipes/imagen.pipe';
import { MovieComponent } from '../shared/pages/movie/movie.component';
import { BuscarComponent } from '../shared/pages/buscar/buscar.component';
import { YoutubePlayerComponent } from '../shared/components/youtube-player/youtube-player.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    ImagenPipe,
    MovieTarjetaComponent,
    MovieComponent,
    BuscarComponent,
    YoutubePlayerComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    MoviesRoutingModule,
    YouTubePlayerModule,
    SweetAlert2Module
  ]
})
export class MoviesModule { }

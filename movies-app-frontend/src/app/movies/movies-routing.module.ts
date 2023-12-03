import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from '../shared/pages/listado/listado.component';
import { MovieComponent } from '../shared/pages/movie/movie.component';
import { BuscarComponent } from '../shared/pages/buscar/buscar.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

// NOTa: Módulo para manejo de rutas hijas
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'search',
        component: BuscarComponent
      },
      {
        path: 'list',
        component: ListadoComponent
      },
      {
        path: 'favorites',
        component: FavoritesComponent
      },
      {
        path: ':id',
        component: MovieComponent
      },
      // NOTA: Cualquier otra ruta
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }

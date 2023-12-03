import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { MovieComponent } from './pages/movie/movie.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list',
        component: ListadoComponent
      },
      {
        path: 'search',
        component: BuscarComponent
      },
      {
        path: 'list',
        component: ListadoComponent
      },
      {
        path: ':id',
        component: MovieComponent
      },
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
export class HomeRoutingModule { }

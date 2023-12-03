import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListadoComponent } from '../movies/pages/listado/listado.component';
import { BuscarComponent } from '../movies/pages/buscar/buscar.component';

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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';

// NOTa: Módulo para manejo de rutas hijas
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'listado',
        component: ListadoComponent
      },
      // NOTA: Cualquier otra ruta
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }

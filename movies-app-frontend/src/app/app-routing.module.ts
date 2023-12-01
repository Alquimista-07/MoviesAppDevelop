import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // NOTA: Rutas películas - LazyLoad
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesModule)
  },
  {
    path: '**',
    redirectTo: '/movies/list'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

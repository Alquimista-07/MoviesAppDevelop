import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // NOTA: Rutas películas - LazyLoad
  {
    path: '',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

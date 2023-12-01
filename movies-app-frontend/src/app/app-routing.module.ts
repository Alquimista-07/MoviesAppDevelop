import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [

  // NOTA: Rutas películas - LazyLoad
  {
    path: 'auth',
    loadChildren:() => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesModule),
    // canLoad: [ AuthGuard ],
    // canActivate: [ AuthGuard ]
  },
  {
    path: '**',
    redirectTo: 'movies'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

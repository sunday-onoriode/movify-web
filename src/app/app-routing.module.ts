import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {HomeComponent} from './pages/home/home.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {MovieComponent} from './pages/movie/movie.component';
import {MovieResolver} from './services/custom.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'movies',
    component: HomeComponent
  },
  {
    path: 'movies/:slug',
    component: MovieComponent,
    resolve: {
      movie: MovieResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'movie/:id', component: MoviePageComponent },
  { path: 'search', component: SearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }


export const AppRoutingComponent = [
  MoviePageComponent,
  SearchPageComponent
]
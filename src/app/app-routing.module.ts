import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeRoute } from './home/home.routing';
import { blogRoute } from './blog/blog.routing';
import { LetMeTasteItRoute } from './let-me-taste-it/let-me-taste-it.routing';

const routes: Routes = [
  homeRoute,
  blogRoute,
  LetMeTasteItRoute,
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeRoute } from './home/home.routing';

const routes: Routes = [
  homeRoute,
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { commonroutes } from './common';


const routes: Routes = [...commonroutes];

@NgModule({
  imports: [  RouterModule.forRoot(routes, {
    enableTracing: false,
    onSameUrlNavigation: "reload"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

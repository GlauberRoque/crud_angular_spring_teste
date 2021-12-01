import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticesComponent } from './notices/notices.component';

const routes: Routes = [
  { path: '', component: NoticesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class NoticesRoutingModule { }

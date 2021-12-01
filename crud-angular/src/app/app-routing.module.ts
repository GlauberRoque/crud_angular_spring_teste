import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'notices'},
  {
    path: 'notices',
    loadChildren: () => import('./notices/notices.module').then(m => m.NoticesModule)
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule
  ]
})
export class AppRoutingModule { }

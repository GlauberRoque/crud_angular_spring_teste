import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoticesRoutingModule } from './notices-routing.module';
import { NoticesComponent } from './notices/notices.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    NoticesComponent
  ],
  imports: [
    CommonModule,
    NoticesRoutingModule,
    RouterModule,
    MatTableModule
  ]
})
export class NoticesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusListComponent } from './status-list/status-list.component';
import { StatusRoutingModule } from './status-routing.module';



@NgModule({
  declarations: [
    StatusListComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule
  ]
})
export class StatusModule { }

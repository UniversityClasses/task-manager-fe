import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusListComponent } from './status-list/status-list.component';
import { StatusRoutingModule } from './status-routing.module';
import { StatusTableComponent } from './status-table/status-table.component';
import { StatusFormComponent } from './status-form/status-form.component';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusService } from './services/status.service';



@NgModule({
  declarations: [
    StatusListComponent,
    StatusTableComponent,
    StatusFormComponent,
    StatusFilterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StatusRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    StatusService
  ]
})
export class StatusModule { }

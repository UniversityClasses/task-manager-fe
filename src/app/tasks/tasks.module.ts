import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskTableComponent } from './task-table/task-table.component';
import { TaskTableItemComponent } from './task-table-item/task-table-item.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { TaskService } from './services/task.service';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskTableComponent,
    TaskTableItemComponent,
    TaskFormComponent,
    TaskFilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskListComponent
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
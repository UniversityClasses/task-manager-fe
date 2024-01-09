import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent {
  @Input() taskList: Task[] | null = [];
  @Output() openTask = new EventEmitter<Task>();
}

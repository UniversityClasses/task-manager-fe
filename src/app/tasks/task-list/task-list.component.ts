import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  taskList$: Observable<Task[]> = of([]);

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskList$ = this.taskService.getAll();
  }

}

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Observable, filter, forkJoin, map, of } from 'rxjs';
import { Task } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  taskList$: Observable<Task[]> = of([]);
  taskNames$: Observable<String[]> = of([]);
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskList$ = this.taskService.getAll();

    this.taskList$.subscribe((tasks) => {
      const names = tasks.map(t => t.name);
      console.log(names);
    });

    this.taskNames$ = this.taskList$.pipe(
      map((tasks) => tasks.map(t => t.name)),
    )
  }

}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from 'src/app/shared/models/task.model';

@Injectable()
export class TaskService {

  constructor() { }

  getAll(): Observable<Task[]> {
    return of([{
      uuid: '1',
      name: 'tarea 1 name',
      description: 'tarea 1 description',
      category: 'tarea 1 category',
      status: 'tarea 1 status',
    },
    {
      uuid: '2',
      name: 'tarea 2 name',
      description: 'tarea 2 description',
      category: 'tarea 2 category',
      status: 'tarea 2 status',
    },
    {
      uuid: '2',
      name: 'tarea 2 name',
      description: 'tarea 2 description',
      category: 'tarea 2 category',
      status: 'tarea 2 status',
    }]);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from 'src/app/shared/models/task.model';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable()
export class TaskService {
  private url = 'http://localhost:8080/taskssss';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.url)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([{name: "test", description: "test"} as Task])
        })
      );
  }

  getOne(taskUuid: string): Observable<Task> {
    return this.httpClient.get<Task>(`${this.url}/${taskUuid}`);
  }

  save(task: Task) {
    return this.httpClient.post<Task>(this.url, task)
      .pipe(
        catchError((error) => {
          return throwError(() => ({responseError: error, hasError: true, source: 'taskSave'}))
        })
      );
  }

  delete(taskUuid: string) {
    return this.httpClient.delete<Task>(`${this.url}/${taskUuid}`);
  }
}

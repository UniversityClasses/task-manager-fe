import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Status } from 'src/app/shared/models/status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private url = 'http://localhost:8080/statuses';

  saveStatus = new EventEmitter<Status>();

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Status[]>(this.url);
  }

  getOne(statusUuid: string){
    return this.httpClient.get<Status>(`${this.url}/${statusUuid}`);
  }

  save(status: Status) {
    return this.httpClient.post<Status>(this.url, status);
  }

  edit(status: Status){
    return this.httpClient.put<Status>(this.url, status);
  }

  delete(statusUuid: string) {
    return this.httpClient.delete<Status>(`${this.url}/${statusUuid}`);
  }
}

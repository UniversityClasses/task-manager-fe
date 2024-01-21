import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'http://localhost:8080/categories';
  
  saveCategory = new EventEmitter<Category>();

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Category[]>(this.url);
  }

  getOne(categoryUuid: string){
    return this.httpClient.get<Category>(`${this.url}/${categoryUuid}`);
  }

  save(category: Category) {
    return this.httpClient.post<Category>(this.url, category);
  }

  edit(category: Category){
    return this.httpClient.put<Category>(this.url, category);
  }

  delete(categoryUuid: string) {
    return this.httpClient.delete<Category>(`${this.url}/${categoryUuid}`);
  }

}

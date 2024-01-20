import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, first, of, tap, throwError } from 'rxjs';
import { Category } from 'src/app/shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'http://localhost:8080/categories';
  private categoryCache = new BehaviorSubject<Category[]>([]);
  categoryList$ = this.categoryCache.asObservable();

  constructor(private httpClient: HttpClient) { 
    this.getAll()
      .pipe(first())
      .subscribe((categories) => {
        this.categoryCache.next(categories);
      });
  }


  private getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.url)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([])
        })
      );
  }


  getOne(categoryUuid: string): Observable<Category> {
    return this.httpClient.get<Category>(`${this.url}/${categoryUuid}`);
  }

  save(category: Category) {
    return this.httpClient.post<Category>(this.url, category)
      .pipe(
        tap((categorySaved) => this.categoryCache.next([...this.categoryCache.value, categorySaved])),
        catchError((error) => {
          return throwError(() => ({responseError: error, hasError: true, source: 'categorySave'}))
        })
      );
  }

  edit(category: Category): Observable<Category> {
    return this.httpClient.put<Category>(this.url, category)
      .pipe(
        tap((categorySaved) => {          
          this.categoryCache.next([...this.categoryCache.value, categorySaved]);
        }),
        catchError((error) => {
          return throwError(() => ({responseError: error, hasError: true, source: 'taskSave'}))
        })
      );
  }

  delete(categoryUuid: string) {
    return this.httpClient.delete<Category>(`${this.url}/${categoryUuid}`);
  }
}

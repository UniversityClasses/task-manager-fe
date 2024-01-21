import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from 'src/app/shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class EditCategoryService {

  private categoryOpend = new Subject<Category>();

  categoryToEdit$ = this.categoryOpend.asObservable();

  openCategoryToEdit(category: Category){
    this.categoryOpend.next(category);
  }
}

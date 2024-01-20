import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from 'src/app/shared/models/task.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit{
  @Input() categoryList: Category[] | null = [];

  categoryList$: Observable<Category[]> = of([]);
  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryList$ = this.categoryService.categoryList$;
  }

  onSaveTask(category: Category) {
    console.log('onSaveTask')

    if (category.uuid) {
      this.categoryService.edit(category).subscribe((category) => {
        console.log('category updated', category);
      });
    } else {
      this.categoryService.save(category).subscribe((catel) => {
        console.log('Category created', category);
      });
    }
  }
}

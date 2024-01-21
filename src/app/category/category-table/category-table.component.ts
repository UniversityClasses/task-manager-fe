import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit{

  categories: Category[];

  constructor(private categoryService: CategoryService, private router: Router){}

  ngOnInit(): void {
    this.categoryService.getAll()
        .subscribe(category=>{
          this.categories=category;
        })
  }

  delete(category: Category){
    const opcion = confirm('Desea Eliminar a ' + category.name + ' !!!!');
    if(opcion===true){
      this.categoryService.delete(category.uuid)
        .subscribe(category =>{
          console.log(category);
          this.router.navigate(['/app-category-list']);
        })
    }
  }

}

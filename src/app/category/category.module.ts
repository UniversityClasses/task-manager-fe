import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryService } from './services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoryTableComponent } from './category-table/category-table.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { CategoryFormComponent } from './category-form/category-form.component';



@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryTableComponent,
    CategoryFilterComponent,
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CategoryRoutingModule
  ],
  exports: [
    CategoryListComponent
  ],
  providers:[
    CategoryService
  ]
})
export class CategoryModule { }

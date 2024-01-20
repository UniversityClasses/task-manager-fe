import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryService } from './services/category.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CategoryListComponent
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

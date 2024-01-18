import { Component } from '@angular/core';
import { TaskService } from 'src/app/tasks/services/task.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  constructor(private taskService: TaskService) {
  }
}

import { Category } from "./category.model";
import { Status } from "./status.model";

export class Task {
  uuid: string;
  name: string;
  description: string;
  categories: Category[];
  status: Status;
}
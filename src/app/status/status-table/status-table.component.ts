import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/shared/models/status.model';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss']
})
export class StatusTableComponent implements OnInit{

  statuses: Status[];
  constructor(private statusService: StatusService){}

  ngOnInit(): void {
    this.statusService.getAll()
        .subscribe(status=>{
          this.statuses=status;
        })
    this.statusService.saveStatus
        .subscribe((status)=>{
          this.statuses.push(status);
        })
  }

  delete(status: Status){
    const opcion = confirm('Desea Eliminar a ' + status.name + ' !!!!');
    if(opcion===true){
      this.statusService.delete(status.uuid)
        .subscribe(status =>{
          console.log(status);
          this.statuses=this.statuses.filter(state=> state.uuid!==status.uuid)
        })        
    }
  }

  openCategory(status: Status) {
    console.log(status)
  }

}

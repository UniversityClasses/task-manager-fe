import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { StatusService } from '../services/status.service';
import { Status } from 'src/app/shared/models/status.model';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss']
})
export class StatusFormComponent implements OnInit{

  formGroup = new FormGroup({
    uuid: new FormControl<string | null>(null),
    name: new FormControl<string>('', [Validators.required, Validators.maxLength(200), Validators.minLength(3)]),
    description: new FormControl<string>('', [Validators.required, Validators.maxLength(2000), Validators.minLength(3)])
  });

  get nameErrors(): ValidationErrors | null {
    return this.formGroup.controls.name.errors;
  }

  get descriptioErrors(): ValidationErrors | null {
    return this.formGroup.controls.description.errors;
  }

  ngOnInit(): void {
  }

  constructor(private statusService: StatusService){}

  save() {
    if (!this.formGroup.valid) {
      this.formGroup.updateValueAndValidity();
      return;
    }
    
    const statusFormValue = this.formGroup.value;
    this.statusService.save(statusFormValue as Status)
        .subscribe((status)=>{
          console.log(status);
          this.statusService.saveStatus.emit(status);
        })
  }

}

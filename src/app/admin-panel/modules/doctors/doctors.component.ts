import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/crud.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  constructor(private crudService:CrudService) { }

  ngOnInit() {
    this.getDoctors();
  }

  doctors;
  getDoctors = () =>
      this.crudService
      .getDoctors()
      .subscribe(res =>(this.doctors = res));

  deleteDoctor = data => this.crudService.deleteDoctor(data);

  markVerify = data => this.crudService.verifyDoctor(data);

}

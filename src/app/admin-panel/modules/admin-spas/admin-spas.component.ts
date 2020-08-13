import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/crud.service';

@Component({
  selector: 'app-admin-spas',
  templateUrl: './admin-spas.component.html',
  styleUrls: ['./admin-spas.component.scss']
})
export class AdminSpasComponent implements OnInit {

  constructor(private crudService:CrudService) { }

  ngOnInit() {
    this.getSpas();
  }

  spas;
  getSpas = () =>
      this.crudService
      .getSpas()
      .subscribe(res =>(this.spas = res));

  deleteSpas = data => this.crudService.deleteSpas(data);

  markVerify = data => this.crudService.verifySpas(data);


}

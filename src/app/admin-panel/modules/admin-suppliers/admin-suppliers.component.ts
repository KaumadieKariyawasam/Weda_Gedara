import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/crud.service';

@Component({
  selector: 'app-admin-suppliers',
  templateUrl: './admin-suppliers.component.html',
  styleUrls: ['./admin-suppliers.component.scss']
})
export class AdminSuppliersComponent implements OnInit {

  suppliers;

  constructor(private crudService:CrudService) { }

  ngOnInit() {
    this.getSuppliers();
    console.log(this.suppliers);
    
  }

  getSuppliers = () =>
      this.crudService.getSuppliers().subscribe(res =>(this.suppliers = res));

  deleteSuppliers = data => this.crudService.deleteSuppliers(data);

  markVerify = data => this.crudService.verifySuppliers(data);


}

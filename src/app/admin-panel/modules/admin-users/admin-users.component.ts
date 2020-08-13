import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/crud.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  constructor(private crudService:CrudService) { }

  ngOnInit() {
    this.getUsers();
  }

  users;
  getUsers = () =>
      this.crudService
      .getUsers()
      .subscribe(res =>(this.users = res));

  deleteSuppliers = data => this.crudService.deleteUsers(data);

  markVerify = data => this.crudService.verifyUsers(data);


}

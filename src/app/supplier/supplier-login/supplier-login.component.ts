import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup,Validators} from "@angular/forms";
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {SupplierService} from './../../shared/supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-login',
  templateUrl: './supplier-login.component.html',
  styleUrls: ['./supplier-login.component.scss']
})
export class SupplierLoginComponent implements OnInit {

  constructor(private supplierService:SupplierService,private router: Router) { }
  success:boolean;
  

  form=new FormGroup({
    
    email:new FormControl('',Validators.email),
    password:new FormControl('',Validators.required) 
  });
  formControl=this.form.controls;
  ngOnInit() {
    
  }
  logIn(){ 
    localStorage.setItem('supplier_email',this.form.value.email);
    this.supplierService.logIn(this.form.value.email,this.form.value.password);
    console.log('Login is write');
    if(this.supplierService.login){
      this.success=true;
    }else{
      this.success=false;
    }

  }
 
  get email(){
    return this.form.get("email");
  }
  get password(){
    return this.form.get("password");
  }

}

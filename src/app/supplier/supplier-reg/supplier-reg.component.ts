import { Component, OnInit } from '@angular/core';
import {SupplierService} from '../../shared/supplier.service';
import { FormControl,FormGroup,Validators} from "@angular/forms";
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { from } from 'rxjs';

@Component({
  selector: 'app-supplier-reg',
  templateUrl: './supplier-reg.component.html',
  styleUrls: ['./supplier-reg.component.scss']
})
export class SupplierRegComponent implements OnInit {

  form=new FormGroup({
   
    fullname:new FormControl('',Validators.required),
    telephone:new FormControl('',[Validators.required,Validators.minLength(10)]),
    email:new FormControl('',Validators.email),
    address:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    area:new FormControl('',Validators.required),

  }); 

  constructor(private supplierService: SupplierService) { }
  submitted:boolean;
  showSuccessMessage:boolean;
  formControls=this.form.controls;
 
  ngOnInit() {
    
  }
  onSubmit(){
    this.submitted=true;
    
    if(this.form.valid){
      //console.log('Validation Function');
      this.supplierService.create(this.form.value);
      console.log(this.form.value)
      this.supplierService.signup(this.form.value.email,this.form.value.password);
      this.showSuccessMessage=true;
     //this.form.reset();
    }
  }


}

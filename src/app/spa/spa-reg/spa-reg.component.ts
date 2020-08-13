import { Component, OnInit } from '@angular/core';
import {SpaService} from '../../shared/spa.service';
import { FormControl,FormGroup,Validators} from "@angular/forms";
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { from } from 'rxjs';

@Component({
  selector: 'app-spa-reg',
  templateUrl: './spa-reg.component.html',
  styleUrls: ['./spa-reg.component.css']
})
export class SpaRegComponent implements OnInit {
 
  district:string[]=["Galle","Colombo","Matara","Ampara","Anuradhapura","Badulla","Baticoloa","Gampaha","Hambanthota","Jaffna"];

  form=new FormGroup({
   
    spaname:new FormControl('',Validators.required),
    reg_no:new FormControl('',Validators.required),
    telephone:new FormControl('',[Validators.required,Validators.minLength(10)]),
    email:new FormControl('',Validators.email),
    web:new FormControl(''),
    address:new FormControl('',Validators.required),
    admin_email:new FormControl('',Validators.email),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    area:new FormControl('',Validators.required),
    image: new FormControl()

  }); 

  constructor(private spaService: SpaService) { }
  submitted:boolean;
  showSuccessMessage:boolean;
  formControls=this.form.controls;
 
  ngOnInit() {
    
  }
  onSubmit(){
    this.submitted=true;
    console.log(this.form.value.area);
    if(this.form.valid){
      //console.log('Validation Function');
      this.spaService.create(this.form.value);
      this.spaService.signup(this.form.value.email,this.form.value.password);
      this.showSuccessMessage=true;
     //this.form.reset();
    }
  }

}

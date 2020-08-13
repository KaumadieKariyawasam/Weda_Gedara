import { Injectable } from '@angular/core';
import {FormControl,FormGroup,Validators } from "@angular/forms"
@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {

  constructor() { }

  form=new FormGroup({
    $key:new FormControl(null),
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])

  });
}

import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from "@angular/forms";
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-spaforgotten-pwd',
  templateUrl: './spaforgotten-pwd.component.html',
  styleUrls: ['./spaforgotten-pwd.component.css']
})
export class SpaforgottenPwdComponent implements OnInit {

  constructor(private afa:AngularFireAuth) { }
  form=new FormGroup({

    email:new FormControl()

  }); 
  formControl=this.form.controls;

  ngOnInit() {
  }

  reset(){
    const fbAuth=this.afa.auth;
    return fbAuth.sendPasswordResetEmail(this.form.value.email).then(()=>

      alert("check your email")
    ).catch(error=>alert("Sorry. Try again Later"));

  }

}

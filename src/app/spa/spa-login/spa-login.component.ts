import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl,FormGroup,Validators} from "@angular/forms";
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {SpaService} from './../../shared/spa.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-spa-login',
  templateUrl: './spa-login.component.html',
  styleUrls: ['./spa-login.component.css']
})
export class SpaLoginComponent implements OnInit {

  constructor(private spaService:SpaService,private router:Router,private afa:AngularFireAuth) { }
  success:boolean;
  

  form=new FormGroup({
    
    email:new FormControl('',Validators.email),
    password:new FormControl('',Validators.required) 
  }); 
  formControl=this.form.controls;
  ngOnInit() {
    
  }
  logIn(){ 
    localStorage.setItem('spa_email',this.form.value.email);
    this.spaService.logIn(this.form.value.email,this.form.value.password);
    console.log('Login is write');
    this.success=this.spaService.login;
    console.log("suceess",this.success);
   
    if(this.spaService.login){
      this.router.navigateByUrl('/spa-view');
      console.log("routing");
    }else{
      this.success=false;
      console.log(" not routing");
    }
 }
 
  get email(){
    return this.form.get("email");
  }
  get password(){
    return this.form.get("password");
  }
  goForgetton(){
    //console.log("This is Forgotton");
    const fbAuth=this.afa.auth;
    return fbAuth.sendPasswordResetEmail(this.form.value.email).then(()=>

      alert("check your email")
    ).catch(error=>alert("Sorry. Try again Later"));

  }
  goNavigate(){
    this.spaService.routingLogin();
  }
 
}

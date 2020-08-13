import { Component, OnInit } from '@angular/core';
import {SpaService} from '../../shared/spa.service';
import { FormControl,FormGroup,Validators} from "@angular/forms";
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {Router} from '@angular/router';
export interface Spa{
  image:String;
  spaname:String;
  reg_no: string;
  telephone:String;
  email:String;
  web:String;
  address:String;
  admin_email:String;
  description:String;
}


@Component({
  selector: 'app-spa-update',
  templateUrl: './spa-update.component.html',
  styleUrls: ['./spa-update.component.css']
})


export class SpaUpdateComponent implements OnInit {
  spaname:String;
  reg_no: string;
  telephone:String;
  email:String;
  web:String;
  address:String;
  admin_email:String;
  image:String;
  description:String=" ";
  download;
 updatesuccess:boolean;
  form=new FormGroup({
   
    spaname:new FormControl(),
    reg_no:new FormControl(),
    telephone:new FormControl(),
    email:new FormControl(),
    web:new FormControl(),
    address:new FormControl(),
    admin_email:new FormControl(),
    image: new FormControl(),
    password:new FormControl(),
    description:new FormControl()
   

  }); 
  formControls=this.form.controls;
  constructor(private spaService:SpaService,private afs: AngularFirestore,private afst:AngularFireStorage, private router:Router) {
    let spaemail: string;
    spaemail= localStorage.getItem('spa_email');
    console.log('spaemail'+spaemail);
      this.email =spaemail;

      this.afs.doc<Spa>('spa1/'+this.email).valueChanges().subscribe(
        
        res=>{
          this.spaname=res.spaname;
          this.reg_no=res.reg_no;
          this.email=res.email;
          this.telephone=res.telephone;
          this.web=res.web;
          this.admin_email=res.admin_email;
          this.address=res.address;
          this.image = res.image;

          this.description=res.description;

        }); 
        console.log(this.spaname);

   }

  ngOnInit() {
  }
  onSubmit(){
   

   if(this.form.value.spaname==null){
     this.form.value.spaname=this.spaname;
   }
   if(this.form.value.reg_no==null){
    this.form.value.reg_no=this.reg_no;
  }
  if(this.form.value.telephone==null){
    this.form.value.telephone=this.telephone;
  }
  if(this.form.value.email==null){
    this.form.value.email=this.email;
  }
  if(this.form.value.web==null){
    this.form.value.web=this.web;
  }
  if(this.form.value.address==null){
    this.form.value.address=this.address;
  }
  if(this.form.value.admin_email==null){
    this.form.value.admin_email=this.admin_email;
  }
  if(this.form.value.image==null){
    this.form.value.image=this.image;
  }

  if(this.form.value.description==null){
    this.form.value.description=this.description;
  }

  this.download=this.afst.ref("/spa/"+this.randomId).getDownloadURL().subscribe(a=>{
    this.download=a;
    this.form.value.image=this.download;
    console.log("download url",this.form.value.image);
    this.spaService.update(this.form.value);

  });
  this.spaService.update(this.form.value);
  
  this.spaService.update(this.form.value);


    
  }
  goView(){
    this.router.navigateByUrl('/spa-view');
  }
  randomId;
  upload(event){
    this.randomId=Math.random().toString(36).substring(2);
    this.afst.upload("/spa/"+this.randomId,event.target.files[0]);
    console.log("image:",this.form.value.image,"  ",this.image);
  }

  goGallery(){
    this.router.navigateByUrl('/spa-gallery');
  }

}

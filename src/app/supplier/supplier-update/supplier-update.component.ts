import { Component, OnInit } from '@angular/core';
import {SupplierService} from '../../shared/supplier.service';
import { FormControl,FormGroup,Validators} from "@angular/forms";
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';

export interface Supplier{
  fullname:String;
  telephone:String;
  email:String;
  address:String;
  area:String;
  image:string;
  description:String;
}


@Component({
  selector: 'app-supplier-update',
  templateUrl: './supplier-update.component.html',
  styleUrls: ['./supplier-update.component.scss']
})
export class SupplierUpdateComponent implements OnInit {

  fullname:String;
  telephone:String;
  email:String;
  address:String;
  area:String;
  description:String;
  image:String;
  download;
 updatesuccess:boolean;
details: string;

  form=new FormGroup({
   
    fullname:new FormControl(this.fullname,Validators.required),
    telephone:new FormControl(this.telephone,[Validators.required, Validators.pattern("[0-9]{10}")]),
    email:new FormControl(this.email,Validators.required),
    address:new FormControl(this.address,Validators.required),
    area:new FormControl(this.area,Validators.required),
    image: new FormControl(),
    password:new FormControl(),
    description:new FormControl()


  }); 
  formControls=this.form.controls;
  constructor(private supplierService:SupplierService,private afs: AngularFirestore,private afst:AngularFireStorage, private router:Router) {
    let supplieremail: string;
    supplieremail= localStorage.getItem('supplier_email');
    console.log('supplieremail'+supplieremail);
      this.email =supplieremail;

      this.afs.doc<Supplier>('supplier/'+this.email).valueChanges().subscribe(
        
        res=>{
          this.fullname=res.fullname;
          this.email=res.email;
          this.telephone=res.telephone;
          this.area=res.area;
          this.address=res.address;
          this.image=res.image;
          this.description=res.description;
        }); 
        console.log(this.fullname);

   }

  ngOnInit() {
  }

  
  onSubmit(){
   if(this.form.value.fullname==null){
     this.form.value.fullname=this.fullname;
   }
  if(this.form.value.telephone==null){
    this.form.value.telephone=this.telephone;
  }
  if(this.form.value.email==null){
    this.form.value.email=this.email;
  }
  if(this.form.value.address==null){
    this.form.value.address=this.address;
  }
  if(this.form.value.area==null){
    this.form.value.area=this.area;
  }
  if(this.form.value.description==null){
    this.form.value.description=this.description;
  }
  if(this.form.value.image==null){
    this.form.value.image=this.image;
  }
  


console.log(this.form.value.details)
  this.download=this.afst.ref("/supplier/"+this.randomId).getDownloadURL().subscribe(a=>{
    this.download=a;
    this.form.value.image=this.download;
    console.log("download url",this.form.value.image);
    this.supplierService.update(this.form.value);
  });

  this.supplierService.update(this.form.value);
  

  }
  goView(){
    this.router.navigateByUrl('/supplier-view');
  }
  randomId;
  upload(event){
    this.randomId=Math.random().toString(36).substring(2);
    this.afst.upload("/supplier/"+this.randomId,event.target.files[0]);
    console.log("image:",this.form.value.image,"  ",this.image);
  }

}

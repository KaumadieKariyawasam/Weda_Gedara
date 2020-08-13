import { Component, OnInit } from '@angular/core';
import {SupplierService} from '../../shared/supplier.service';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
//import {AngularFireStorageReference,AngularFireUploadTask,AngularFireStorage} from '@angular/fire/storage';
import { FormControl,FormGroup,Validators} from "@angular/forms";
import { Router } from '@angular/router';
//import {Observable} from 'rxjs';
//import { finalize } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

export interface Supplier{
  fullname:String;
  telephone:String;
  email:String;
  address:String;
  area:String;
  image:String;
  description:String;

}

@Component({
  selector: 'app-supplier-login-view',
  templateUrl: './supplier-login-view.component.html',
  styleUrls: ['./supplier-login-view.component.scss']
})
export class SupplierLoginViewComponent implements OnInit {

  fullname:String;
  telephone:String;
  email:String;
  address:String;
  area:String;
  file;
  requests: any;
  description:String;

  

  form1=new FormGroup({
   
   
    email:new FormControl()

  }); 
 
  constructor(private supplierService:SupplierService,private afs: AngularFirestore,private router: Router,public afAuth: AngularFireAuth) { 
    
    


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
          this.file=res.image;
          this.description=res.description;

        }); 
        console.log(this.fullname);

  }

  form=new FormGroup({
   
    password:new FormControl(),
    email:new FormControl()

  }); 
  formControl=this.form.controls;

 
  
  ngOnInit() {
    
    
  }
  goUpdate(){
    this.router.navigateByUrl('/supplier-update');
  }
  onLogout() {
    localStorage.removeItem('eq_user');
    localStorage.clear();
    this.afAuth.auth.signOut();
    this.router.navigate(['supplier-log']);
  }

  onDelete(){
    console.log('confirmed');
    this.supplierService.logInConfirm(this.form.value.email,this.form.value.password);
    this.delete();
  }

  delete(){
    console.log("This is delete");
    this.supplierService.deleteAccount(this.form.value.email);
  }

}

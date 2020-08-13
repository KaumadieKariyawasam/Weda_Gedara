import { Component, OnInit } from '@angular/core';
import {SpaService} from '../../shared/spa.service';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import { FormControl,FormGroup,Validators} from "@angular/forms";
import {Router} from '@angular/router';

//import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
//import {SpaConfirmDeleteComponent} from '../spa-confirm-delete/spa-confirm-delete.component';

//import {Observable} from 'rxjs';
//import { finalize } from 'rxjs/operators';

export interface Spa{
  image:String;
  spaname;
  reg_no: string;
  telephone:String;
  email:String;
  web:String;
  address:String;
  area:String;
  admin_email:String;
  description:String;
}


@Component({
  selector: 'app-spa-view',
  templateUrl: './spa-view.component.html',
  styleUrls: ['./spa-view.component.css']
})



export class SpaViewComponent implements OnInit {
  spaname;
  reg_no: string;
  telephone:String;
  email:String;
  web:String;
  address:String;
  area:String;
  admin_email:String;
  description:String;
  file;
  requests: any;
 
  
  docu=[]=[];


  gallery=[]=[];

  form1=new FormGroup({
    email:new FormControl(''),
    image:new FormControl(''),
    random:new FormControl('')
  });
  
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
          this.file=res.image;
          this.area=res.area;
          this.description=res.description;
          localStorage.setItem('spa_name',res.spaname);
          console.log("result file",res.image);
          console.log("image",this.file);
        
        }); 
        
        console.log('set spa name to local storage');
        console.log(this.spaname);
        console.log("file",this.file);
        this.spaService.getGallery(this.email).subscribe(result=>{
          this.gallery=result;
        });
        
  }

   
  form=new FormGroup({
   
    password:new FormControl(),
    image: new FormControl(),
    email:new FormControl()

  }); 
  formControl=this.form.controls;


  
  ngOnInit() {
    
    
  }
  onDelete(){
    console.log('confirmed');
    this.spaService.logInConfirm(this.form.value.email,this.form.value.password);
    this.delete();
  }
  goUpdate(){
    this.router.navigateByUrl('/spa-update');
  }

  delete(){
    console.log("This is delete");
    this.spaService.deleteAccount(this.form.value.email);
  }
 
  randomId;

  viewArticle(){
    this.router.navigateByUrl('/spa-article');
  }

  
}

// import { Doctor } from './../../../signup/doctor-signup/doctor';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';

export interface Doctor{
  DisplayName: String;
  address: string;
  area: String;
  email: String;
  gender: String;
  nic: number;
  telphoneNumber: number;
  image:String;
  description:String;
}

@Component({
  selector: 'app-doctorprofile-edit',
  templateUrl: './doctorprofile-edit.component.html',
  styleUrls: ['./doctorprofile-edit.component.css']
})
export class DoctorprofileEditComponent implements OnInit {

  DisplayName: String;
  address: string;
  area: String;
  email: String;
  gender: String;
  nic: number;
  telphoneNumber: number;
  image:String;
  description:String;
  download;

  form = new FormGroup({
    DisplayName: new FormControl(this.DisplayName,Validators.required),
    address: new FormControl(this.address,Validators.required),
    area: new FormControl(this.area,Validators.required),
    email: new FormControl(this.email,Validators.required),
    gender: new FormControl(this.gender,Validators.required),
    nic: new FormControl(this.nic,[Validators.required, Validators.minLength(10)]),
    telphoneNumber: new FormControl(this.telphoneNumber,[Validators.required, Validators.minLength(10),Validators.pattern('[0]\\d{9}')]),
    // password: new FormControl(),
    image: new FormControl(),
    description:new FormControl(this.description)

  });


  id: string;
  formControls = this.form.controls;

  constructor(private afs: AngularFirestore, private router: Router, private route: ActivatedRoute,private afst:AngularFireStorage) {
    let docemail: string;
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      });
    docemail = localStorage.getItem('spa_email');
    console.log('docemail' + docemail);
      this.email = docemail;
      console.log(this.id);
      this.afs.doc<Doctor>('doctors/' + this.id ).valueChanges().subscribe(

        res => {
          this.DisplayName = res.DisplayName;
          this.email = res.email;
          this.area = res.area;
          this.address = res.address;
          this.gender = res.gender;
          this.nic = res.nic;
          this.telphoneNumber = res.telphoneNumber;
          this.image=res.image;
          this.description=res.description;
        });
        console.log(this.DisplayName);
   }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.id = params.get("id")
    //   });
  }

  onSubmit() {

    if (this.form.value.DispalyName == null) {
      this.form.value.DisplayName = this.DisplayName;
    }
   if (this.form.value.email == null) {
     this.form.value.email = this.email;
   }
   if (this.form.value.address == null) {
     this.form.value.address = this.address;
   }
   if (this.form.value.area == null) {
     this.form.value.area = this.area;
   }
   if (this.form.value.gender == null) {
    this.form.value.gender = this.gender;
  }
  if (this.form.value.nic == null) {
    this.form.value.nic = this.nic;
  }
  if (this.form.value.telphoneNumber == null) {
    this.form.value.telphoneNumber = this.telphoneNumber;
  }
  if(this.form.value.description==null){
    this.form.value.description=this.description;
  }

  if(this.form.value.image==null){
    this.form.value.image=this.image;
  }

  this.download=this.afst.ref("/doctors/"+this.randomId).getDownloadURL().subscribe(a=>{
    this.download=a;
    this.form.value.image=this.download;
    console.log("download url",this.form.value.image);
    this.update(this.form.value);

  });
  this.update(this.form.value);
  
  this.update(this.form.value);


   

 
    console.log('updete functin');
    
  }

   update(spa1){
     this.afs.doc('doctors/' + this.id ).update(spa1).then(
       res => {
         alert('udpated');
        this.router.navigateByUrl('/doctor-profile');
       });
    console.log(spa1.email);
    }

    goView(){
      this.router.navigateByUrl('/spa-view');
    }
    randomId;
    upload(event){
      this.randomId=Math.random().toString(36).substring(2);
      this.afst.upload("/doctors/"+this.randomId,event.target.files[0]);
      console.log("image:",this.form.value.image,"  ",this.image);
    }
  

}

import { User } from 'src/app/signup/user.module';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  DisplayName: String;
  address: string;
  area: String;
  email: String;
  gender: String;
  nic: number;
  telphoneNumber: number;

  form = new FormGroup({
    DisplayName: new FormControl(this.DisplayName,Validators.required),
    address: new FormControl(this.address,Validators.required),
    area: new FormControl(this.area,Validators.required),
    email: new FormControl(this.email,Validators.required),
    gender: new FormControl(this.gender,Validators.required),
    nic: new FormControl(this.nic,[Validators.required, Validators.minLength(10)]),
    telphoneNumber: new FormControl(this.telphoneNumber,[Validators.required, Validators.minLength(10)])
  });

  id: string;
  formControls = this.form.controls;
  profID: string;


  constructor(private afs: AngularFirestore, private router: Router, private route: ActivatedRoute) {
    let docemail: string;
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      });
    docemail = localStorage.getItem('spa_email');
    console.log('docemail' + docemail);
      this.email = docemail;
      console.log(this.id);
      this.afs.doc<User>('users/' + this.id ).valueChanges().subscribe(

        res => {
          this.DisplayName = res.DisplayName;
          this.email = res.email;
          this.area = res.area;
          this.address = res.address;
          this.gender = res.gender;
          this.nic = res.nic;

        });
        console.log(this.DisplayName);

   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
      });
  }

  onSubmit() {

    console.log(this.DisplayName)
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

    console.log(this.form.value)
     console.log('updete functin');
    this.update(this.form.value);
   }

   update(spa1){
    console.log("updates");
    this.afs.doc('users/' + this.id ).update(spa1).then(
      () =>{window.alert('Update successful');}
      ).then(
      () => {this.router.navigate['/user-profile']}
      );
    console.log(spa1.email);
  }

}

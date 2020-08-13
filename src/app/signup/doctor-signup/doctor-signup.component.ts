import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})
export class DoctorSignupComponent implements OnInit {

  signUpInput: {
    name?: string,
    address?: string,
    // img?: string,
    area?: string,
    email?: string,
    password?: string,
    gender?: string,
    nic?: number,
    telNum?: number
  } = {};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const { email, password, address, area, gender, nic, name, telNumber } = form.value; //img
    this.authService.Signup(email, password)
      .then(result => {
        result.user.updateProfile({displayName: 'Doctor'});
        return this.authService.UpdateDoctorData({
          id: result.user.uid,
          // img: img,
          email: email,
          // PhotoURL: img,
          DisplayName: name,
          address: address,
          area: area,
          gender: gender,
          nic: nic,
          telphoneNumber: telNumber
        });
      })
      .then(() => {
        alert('Sign up complete as a Doctor!');
        return this.authService.Signin(email, password);
      })
      .then(() => {
        this.router.navigate(['/doctor-profile']);
      })
      .catch(error => {
        alert('Could not create user account.' + error.message);
        console.log(error);
      });
  }

}

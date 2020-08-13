import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  signUpInput: {
    name?: string,
    address?: string,
    // img?: string,
    area?: string,
    email?: string,
    password?: string,
    gender?: string,
    nic?: number
  } = {};

  constructor(private authService: AuthService, private router: Router) { }
  SelectedFile = null;

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const { email, password, address, area, gender, nic, name, img } = form.value;
    this.authService.Signup(email, password)
      .then(result => {
        result.user.updateProfile({displayName: 'User'});
        return this.authService.UpdateUserData({
          id: result.user.uid,
          // img: img,
          email: email,
          // PhotoURL: img,
          DisplayName: name,
          area: area,
          address: address,
          gender: gender,
          nic: nic,
        });
      })
      .then(() => {
        alert('Sign up complete!');
        return this.authService.Signin(email, password);
      })
      .then(() => {
        this.router.navigate(['/user-profile']);
      })
      .catch(error => {
        alert('Could not create user account.' + error.message);
        console.log(error);
      });
  }

  onFileSelected(event) {
    this.SelectedFile = event.target.files[0];
  }

}

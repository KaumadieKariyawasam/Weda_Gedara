import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-spa-owner-signup',
  templateUrl: './spa-owner-signup.component.html',
  styleUrls: ['./spa-owner-signup.component.css']
})
export class SpaOwnerSignupComponent implements OnInit {
  signUpInput: {
    name?: string;
    img?: string;
    area?: string;
    email?: string;
    password?: string;
    nic?: number;
    Spalocation?: string;
    regnumber?: string;
  } = {};

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const {email, password, area, nic, name, img, spalocation, regnumber } = form.value;

    this.authService.Signup(email, password)
      .then(result => {
        result.user.updateProfile({displayName: 'SpaOwner'});
        return this.authService.UpdateSpaownerData({
          id: result.user.uid,
          img: img,
          email: email,
          DisplayName: name,
          area: area,
          nic: nic,
          Spa_location: spalocation,
          reg_number: regnumber
        });
      })
      .then(() => {
        alert('Sign up complete!');
        return this.authService.Signin(email, password);
      })
      .then(() => {
        this.router.navigate(['/SpaOwner-profile']);
      })
      .catch(error => {
        alert('Could not create user account.' + error.message);
        console.log(error);
      });
  }
}

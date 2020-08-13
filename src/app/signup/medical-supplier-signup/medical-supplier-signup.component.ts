import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-medical-supplier-signup',
  templateUrl: './medical-supplier-signup.component.html',
  styleUrls: ['./medical-supplier-signup.component.css']
})
export class MedicalSupplierSignupComponent implements OnInit {

  signUpInput: {
    name?: string,
    address?: string,
    img?: string,
    area?: string,
    email?: string,
    password?: string,
    gender?: string,
    nic?: number
  } = {};

  constructor(private authService: AuthService, private router: Router) { }


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
        this.router.navigate(['/supplier-profile']);
      })
      .catch(error => {
        alert('Could not create Supplier account.' + error.message);
        console.log(error);
      });
  }

}

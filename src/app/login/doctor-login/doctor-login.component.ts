import { Router } from '@angular/router';
import { AuthService } from './../../signup/auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {
 p: string;
  constructor(private authService: AuthService, private router: Router, @Inject(SESSION_STORAGE) private storage: WebStorageService) {}

  form = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  });

  formControl = this.form.controls;

  ngOnInit() {
  }

  logIn() {
    this.authService.Signin(this.form.value.email, this.form.value.password)
    .then(() => {
      localStorage.setItem('doctor_email', this.form.value.email);
      this.router.navigate(['/doctor-profile']);
      localStorage.getItem('doctor_id');
    }
    );

  }

  onSignin(form: NgForm) {
    const email = form.value.email;
        const pwd = form.value.password;
        this.authService.Signin(email, pwd)
        .then((result) => {
          localStorage.setItem('email', form.value.email);
          this.p = localStorage.getItem('email');
          console.log(this.p)
          if (result.user.displayName === 'Doctor') {
            this.storage.set('role', result.user.email);
            // this.storage.get("role") &&  this.storage.get("role") ===  "Doctor"
            this.router.navigate(['/doctor-profile']);
          }
        })
        .catch(error => {
          alert('Could not create user account.' + error.message); //log.error(error.stackTrace)
          console.log(error);
        });

    }

}

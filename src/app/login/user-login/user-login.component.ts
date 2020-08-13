import { Router } from '@angular/router';
import { AuthService } from './../../signup/auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
        const pwd = form.value.password;
        this.authService.Signin(email, pwd)
        .then((result) => {
          if (result.user.displayName === 'User') {
            this.storage.set('id',result.user.uid);
            // this.storage.set('role', result.user.email);
            // this.storage.get("role") &&  this.storage.get("role") ===  "Doctor"
            this.router.navigate(['/user-profile']);
          }
        })
        .catch(error => {
          alert('Could not create user account.' + error.message); //log.error(error.stackTrace)
          console.log(error);
        });

    }


}

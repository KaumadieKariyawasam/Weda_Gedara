import { Component, OnInit, Inject } from '@angular/core';
import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/signup/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
        const pwd = form.value.password;
        this.authService.Signin(email, pwd)
        .then((result) => {
            localStorage.setItem('adminemail',form.value.email);
            this.router.navigate(['/default']);
        })
        .catch(error => {
          alert('Could not create user account.' + error.message); // log.error(error.stackTrace)
          console.log(error);
        });

    }

}

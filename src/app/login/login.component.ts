import { Area } from './../profile/areas.model';
import { Profile } from './../profile/profile.model';
import { AuthService } from './../signup/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;

  profiles: Profile[] = [
    new Profile ('isuru vindula', 56, 'sjhydfvsjdfbsubf', 'male', 789456, [
    new Area('ear'), new Area('hands')]),
    new Profile ('Chamara', 6, 'oieirtoiertu', 'female', 456123, [
    new Area('legs'), new Area('eyes')]),

];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.LoginForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'pwd': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
        const pwd = form.value.password;
        // const name = form.value.name;
        this.authService.Signin(email, pwd);
  }
}


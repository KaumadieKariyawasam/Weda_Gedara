import { AuthService } from './auth.service';
import { ServerService } from './../server.service';
import { Component, OnInit } from '@angular/core';

import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { Router } from '@angular/router';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    genders =  ['Male', 'Female'];
    signupForm: FormGroup;
    submitted = false;
    name = 'hello';
    users = [];
    name1 = '';

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.signupForm = new FormGroup({
            username: new FormControl(null, [
                Validators.required,
                Validators.minLength(8),
            ]),
            email: new FormControl(null),
            gender: new FormControl('male'),
            age: new FormControl(null),
            address: new FormControl(null),
            tel_num: new FormControl(null),
            pwd: new FormControl(null)
        });

    }

    onSubmit(form: NgForm) {
        const email = form.value.email;
        const pwd = form.value.password;
        // const name = form.value.name;
        this.authService.Signup(email, pwd);
    }

    // onCreate() {
    //     this.serverService.StoreRegisterData(this.signupForm)
    //     .subscribe(
    //         (Response) => console.log(Response),
    //         (error) => console.log(error)
    //     );
    // }

    push() {
        this.name1 = 'hello ' + this.name;
        console.log(this.name1);
    }

}


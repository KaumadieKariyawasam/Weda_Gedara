import { AuthService } from './../signup/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpwd',
  templateUrl: './forgetpwd.component.html',
  styleUrls: ['./forgetpwd.component.css']
})
export class ForgetpwdComponent implements OnInit {
  ForgetPwd: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.ForgetPwd = new FormGroup({
      'email': new FormControl(null, Validators.email)
    });
  }

//  onForgetPwd(form: NgForm) {
//    const email = form.value.email;
//     this.authService.pwdReset(email);
//  }

 resetPassword(form: NgForm) {
  const email = form.value.email;

  if (!email) {
    alert('Type in your email first');
  }
  this.authService.resetPasswordInit(email)
  .then(
    () => alert('A password reset link has been sent to your email address'),
    (rejectionReason) => alert(rejectionReason))
  .catch(e => alert('An error occurred while attempting to reset your password'));
}

}

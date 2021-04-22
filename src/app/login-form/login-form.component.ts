import { Component, OnInit } from '@angular/core';
import {loginDetail} from '../loginDetail';
import {NgForm} from '@angular/forms';
import * as bcrypt from 'bcryptjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})




export class LoginFormComponent implements OnInit {

constructor(private router: Router) { }

login: loginDetail;
loginSave: loginDetail;
success = false;
loginFailed = false;

ngOnInit(): void {

this.login = {
username: "example",
password: "ee1$wRwwwwwe"

};
  }

  DoLogin()
{
    console.log(this.login.password);

    const salt = bcrypt.genSaltSync(10);
    this.login.password = bcrypt.hashSync(this.login.password, 10);
}
  onSubmit(myForm: NgForm){

this.loginSave={

  username: myForm.value.username,
password: myForm.value.password,

}
if (true){

  this.router.navigate(['/contactUs']);
}

              
  }
}

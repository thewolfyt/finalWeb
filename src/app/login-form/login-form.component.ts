import { Component, OnInit } from '@angular/core';
import {loginDetail} from '../loginDetail';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})




export class LoginFormComponent implements OnInit {

constructor() { }

login: loginDetail;
loginSave: loginDetail;


ngOnInit(): void {

this.login = {
username: "example",
firstName: "example",
lastName: "example",
email: "eee@fj.com",
password: "ee1$wRwwwwwe"

};
  }

  onSubmit(myForm: NgForm){
//u can do any action here
this.loginSave={

  username: myForm.value.username,
password: myForm.value.password,
firstName: myForm.value.firstName,
lastName: myForm.value.lastName,
email: myForm.value.email
}

  }
}

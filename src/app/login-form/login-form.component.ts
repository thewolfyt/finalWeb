import { Component, OnInit } from '@angular/core';
import {loginDetail} from '../loginDetail';
import {NgForm} from '@angular/forms';
import * as bcrypt from 'bcryptjs';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
 import { interval } from 'rxjs';
 import { JwtHelperService } from '@auth0/angular-jwt';
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

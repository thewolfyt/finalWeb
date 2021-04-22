import { Component, OnInit } from '@angular/core';
import {contactDetail} from '../contactDetails';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent implements OnInit {

  constructor() { }

  
  contact: contactDetail;
  contactSave: contactDetail;
  success = false;
  contactFailed = false;
  ngOnInit(): void {

    this.contact = {
      name: "example",
      message: "ee1$wRwwwwwe",
      email: "sdasda@fds.com"
      
      };
  }
  onSubmit(myForm: NgForm){
   
    this.contactSave={
    

      name: myForm.value.name,
      message: myForm.value.message,
      email: myForm.value.email


    }
    
 

}
}



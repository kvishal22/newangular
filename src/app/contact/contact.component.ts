import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidDomainValidator(['gmail.com', 'hotmail.com']);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm = new FormGroup({
    senderName : new FormControl('',Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage : new FormControl('',[Validators.required,Validators.minLength(7)])
  })
  

  submitForm(){
    console.log(this.contactForm.valid);
    //if(this.senderEmailControl.dirty){
      //alert('you changed the email field');
    //}
  }

}

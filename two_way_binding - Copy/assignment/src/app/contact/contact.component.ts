import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NameValidator } from './name.validator';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myForm : FormGroup|any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.myForm = this.fb.group({
      code:['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      firstName: ['', [Validators.minLength(3), Validators.required, NameValidator.cannotContainSpace]],
      lastName: [''],
      email: ['', [Validators.email, Validators.required]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    })
  }

  onSubmit() {
    alert("Your form has been submitted!!");
    console.log(this.myForm.value);
  }

}

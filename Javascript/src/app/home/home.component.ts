import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private fb : FormBuilder) { }

  myform = this.fb.group({
    code : ['', Validators.required],
    firstname : ['', Validators.required],
    lastname : ['', Validators.required],
    email : ['', Validators.email],
    mobile : ['']
  })

  onSubmit(){
    console.warn(this.myform.value);
  }
}

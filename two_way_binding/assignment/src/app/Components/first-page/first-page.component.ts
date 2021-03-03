import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  public data:any=[]
  constructor(private fb: FormBuilder) { }

  myForm: FormGroup|any;
  ngOnInit(){ 
    this.myForm=this.fb.group({
      code: ['',[Validators.min(4) , Validators.required]],
      fname: ['',[Validators.minLength(4) , Validators.required]],
      lname: ['',[Validators.minLength(4) , Validators.required]],
      email: ['',[Validators.email, Validators.required]],
      mobile: ['', Validators.required]
    });
  }
  url="assets/Images/circle-cropped.png";
  onSelectFile(e:any){
    if(e.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }
  get f(){
    return this.myForm.controls;
  }
  onSubmit=()=>{
    this.data.push(this.myForm.value);
    console.log(this.myForm.value);
  }


}

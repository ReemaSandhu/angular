import { Component , OnInit} from '@angular/core';
import { UserService } from './user.service';
import {FormBuilder, Validators, FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  name='REEMA';
  users:any;
  public data:any=[]
  today=new Date();
  decimal_value: number = 5.123456789;
  amount=1000;
  isvalid:boolean=true;
  istrue:boolean=true;
  newData:any;
  deposit(){
    this.amount=this.amount+100;
  }
  changevalue(valid:any){
    this.isvalid=valid;
  }
  changevalue1(valid1:any){
    this.istrue=valid1;
  }
  constructor(public service:UserService, private fb: FormBuilder){

  }
  myForm: FormGroup|any;
  ngOnInit(){
    this.myForm=this.fb.group({
      name: ['',[Validators.minLength(4), Validators.required]],
      email: ['',[Validators.email, Validators.required]],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    });
    this.service.getapidata();
    this.service.getNew().subscribe(
      resp=>this.newData=resp,
      error=> console.error('error'),
      ()=> console.log("complete")

      // this.newData=resp.data;
      // console.log(resp.data);
    )
  }

  getData(){
    this.service.getUsers().subscribe(data=>{
      this.users=data;
      console.log(this.users);
    })
  }

  
  
  get f(){
    return this.myForm.controls;
  }
  onSubmit=()=>{
    this.data.push(this.myForm.value);
    console.log(this.myForm.value);
  }
}

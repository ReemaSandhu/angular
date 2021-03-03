import { Component, OnInit } from '@angular/core';
import {PracticeService} from '../practice.service';
import { FormControl, FormBuilder,Validators,FormGroup } from '@angular/forms';
import { threadId } from 'worker_threads';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  public data: any;
  
   person={
    name : '',
   email : '',
   password : '',
   confirm : ''
   }
   constructor(private service: PracticeService , private fb: FormBuilder){

    
  }
   myForm: FormGroup|any;
   //data.push(this.person);
  // data=[...this.data, this.person];
  users:any;
  ngOnInit(){
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required ,Validators.email]],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
      });
      if(typeof window !== undefined){
        if(localStorage.getItem('data')){
      this.data=JSON.parse(localStorage.getItem('data'));  
        }
    }
  }
  
  // temp=this.person;
   
  getData=()=>{
    this.service.getData(this.data).subscribe((res:any)=>{
      this.users=res;
      console.log(this.users);
    })
  }
 // hey:any="hey";
  // myfunc(e:any){
  //   console.log(e.target.value);
  // }
  removeData(name:string){
    this.data.forEach((element:any,index:number) => {
      if(element.name ===name)
      {
        this.data.splice(index,1);
        localStorage.setItem('data', JSON.stringify(this.data));
      }
    });
  }  
  edit={
    name : '',
   email : '',
   password : '',
   confirm : ''
   }   
  
  editData(name:string){
    window.scroll(0,0);
    this.data.forEach((element:any,index:number) => {
      if(element.name === name)
      {
        this.myForm.value=this.data[index];
        this.edit=this.data[index];
        this.myForm.setValue({
          name: this.edit.name,
          email:this.edit.email,
          password: this.edit.password,
          confirm:this.edit.confirm
        })
        this.data.splice(index,1);
        console.log(this.myForm.value);
        console.log(this.edit);
       // console.log(this.data[index]);
      }
      localStorage.setItem('data', JSON.stringify(this.data));
    });
  }  
  onEdit(){
    console.log(this.edit);
    this.myForm.value=this.edit;
    console.log(this.myForm.value);
  }
  onSubmits=()=>{
    //this.data.push(this.myForm.value);
   // this.data =[...this.data, this.temp];
   this.person=this.myForm.value;
   console.log(this.myForm.value);
   if(typeof window !== 'undefined')
   {  
     if(localStorage.getItem('data')){
     let temp = JSON.parse(localStorage.getItem('data'));
     temp.push(this.myForm.value);
     this.data=temp;
     localStorage.setItem('data', JSON.stringify(this.data));
     }
    
   else{
     this.data.push(this.myForm.value);
     localStorage.setItem('data',JSON.stringify(this.data));
   }
   }
  // console.log(this.hey);
    console.log(this.data);
    
    if(this.person.name=='')
      {alert(" Name is Required");}
    else if(this.person.name.charAt(0)==' ')
      {alert("No space Required in Name");}
    else if(this.person.email==''){
      alert("Email is required");}
    else if(this.person.email.charAt(this.person.email.length-4) != ".")
    {
      alert( this.person.email +" is invalid Email");
    }
    else if(this.person.password==''){
      alert("password is required");}
    else if(this.person.password.length<6)
    {
      alert("password must be greater than 6 characters");
    }
    else if(this.person.confirm==''){
      alert("Enter password to confirm");}
    else if(this.person.confirm != this.person.password)
    {
      alert("Please enter correct Password");
    }
    else
    {
      alert("Submited sucessfully");
    }
  
  }
  

} 
 


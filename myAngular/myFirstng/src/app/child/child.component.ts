import { Component, OnInit } from '@angular/core';
import {PracticeService} from '../practice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  data=[{
    name: 'harman',
    roll_no: "UE173037",
    age: 21,
    branch: "cse"
  },
  {
    name: 'user1',
    roll_no: "UE173031",
    age: 21,
    branch: "CSE"
  },
  {
    name: 'user2',
    roll_no: "UE1730378",
    age: 26,
    branch: "IT"
  },
  {
    name: 'user3',
    roll_no: "UE1730345",
    age: 25,
    branch: "ECE"
  },
  {
    name: 'user4',
    roll_no: "UE17303456",
    age: 19,
    branch: "Mech"
  }]
  users:string|any;
  constructor(public service: PracticeService){
  
  }
 textt= "value";
 date= new Date();
 myError:string|any;
 totalUsers:any;
 page:number|any=1;
 getData=()=>{
   this.service.getUsers().subscribe(res=>{
     this.users=res;
     this.totalUsers=this.users.length;
     console.log(this.totalUsers);
     console.log(this.users);
   }, error=>{
     this.myError=error;
     console.log(this.myError);
   })
 }
 func=()=>console.log(this.textt)
  ngOnInit(): void {
    this.service.getPromise();
  }

}

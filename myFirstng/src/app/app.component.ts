import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'silver-city';
  color : any;
  err = false;
  data = "Pawan Kumar";
  updateColor() {
    this.err = !this.err;
  }
  
  users = [{
    name: 'Pawan',
    age: 24,
    city: 'Mandi'
  },
  {
    name: 'Kumar',
    age: 25,
    city: 'Dabwali'
  }]

  got_from_child = "";
  parentComponent(childData:any) {
    console.log(childData)
    this.got_from_child = childData;
  }

  username = "pawan kumar mehta";
  today = Date.now();
  amount = 100;

  // Services & Forms Section below
  posts:any = [];
  page = 1;
  pageSize = 8;
  collectionSize:any;

  constructor(private user: UsersService) {
  }

  ngOnInit(){
    this.user.getData().subscribe(postsData=>{
      this.posts = postsData;
      this.collectionSize = this.posts.length;
    })
  }
}

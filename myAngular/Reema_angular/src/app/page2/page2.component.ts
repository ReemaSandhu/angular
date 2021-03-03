import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private service:UserService) { }
  users:any;
  ngOnInit(): void {
    this.service.getData().subscribe(res=>{
      this.users=res;
      console.log(this.users);
    }, error=>{
      console.log(error);
    })
  }
 data:any=[
   {
     store: "Store 1",
     caption: "30 Shambles.York YO17LX",
     content: "15% off on Kidney"
   },
   {
    store: "Store 2",
    caption: "30 Shambles.York YO17LX",
    content: "15% off on Kidney"
  },
  {
    store: "Store 3",
    caption: "30 Shambles.York YO17LX",
    content: "15% off on Kidney"
  },
  {
    store: "Store 4",
    caption: "30 Shambles.York YO17LX",
    content: "15% off on Kidney"
  },
  {
    store: "Store 5",
    caption: "30 Shambles.York YO17LX",
    content: "15% off on Kidney"
  },
  {
    store: "Store 6",
    caption: "30 Shambles.York YO17LX",
    content: "15% off on Kidney"
  },
  {
    store: "Store 4",
    caption: "30 Shambles.York YO17LX",
    content: "15% off on Kidney"
  },
  {
    store: "Store 5",
    caption: "30 Shambles.York YO17LX",
    content: "15% off on Kidney"
  },
  {
    store: "Store 6",
    caption: "30 Shambles.York YO17LX",
    content: "15% off on Kidney"
  }
 ]
//  users:any=[
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz"
    
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
   
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
    
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
    
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     email: "Lucio_Hettinger@annie.ca",
    
//   },
//   {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "Karley_Dach@jasper.info",
    
//   },
//   {
//     id: 7,
//     name: "Kurtis Weissnat",
//     username: "Elwyn.Skiles",
//     email: "Telly.Hoeger@billy.biz",
   
//   },
//   {
//     id: 8,
//     name: "Nicholas Runolfsdottir V",
//     username: "Maxime_Nienow",
//     email: "Sherwood@rosamond.me",
   
//   },
//   {
//     id: 9,
//     name: "Glenna Reichert",
//     username: "Delphine",
//     email: "Chaim_McDermott@dana.io",
   
//   },
//   {
//     id: 10,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
    
//   }
// ]

}

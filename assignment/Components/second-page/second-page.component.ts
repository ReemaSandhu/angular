import { Component, OnInit } from '@angular/core';

import { UserService } from '../../user.service'

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  newData:any;
  public data:any=[];
  constructor(public service: UserService) {  }

  ngOnInit() {
    this.service.getapidata(); 
}
products = [
  {"acName":"James Smith Reatail London","fname":"James","lname":"Brown","email":"retail.james@gmail.com","mobile":"+44 123 456 7890"}
  ];;
  
  Stores = [
    {"off1":"15% off on kids Novelty","off2":"20% off on 3 for $1","off3":"10% off on bags"}
    ];;
}

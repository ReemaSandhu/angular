import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  user:any;
  constructor() { 
    this.user={name:'reema',
  title:'Back End Developer',
  address:'1234 road,Chd',
phone:[
  '1234321332',
  '7654645362',
  '8968975622'
]
};
}

  ngOnInit(): void {
  }

}

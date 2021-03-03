import { Component, OnInit } from '@angular/core';
import { RetailerService } from './retailer.service';

@Component({
  selector: 'retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit {

  offers: any = [];
  users: any = [];
  stores: any = [];
  active = 1;
  public text: string = '+ Add to all';

  constructor(private offer: RetailerService) { 
  }

  ngOnInit(): void {
    this.offer.getData().subscribe(offersData => {
      this.offers = offersData;
    })
    this.offer.getUsersData().subscribe(usersData => {
      this.users = usersData;
    })
    this.stores = this.offer.getStores();
  }
  rotate = false;
  toggle() {
    this.rotate = !this.rotate;
  }

}



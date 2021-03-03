import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ChipsService } from './chips.service';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  orders: any= [];
  lastOrder= new Date(2020, 4, 25);
  model: NgbDateStruct|any;
  constructor(private chips: ChipsService) { }
  
  ngOnInit(): void {
    this.orders = this.chips.getOrders();
  }

  trackByOrderCode(index: number, order: any):string{
    return order.code;
  }
}

import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() amount:number|any;
  @Output() amountChange=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  withdraw(){
    this.amount=this.amount-100;
    this.amountChange.emit(this.amount);
  }
}

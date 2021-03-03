import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() data:any;
  @Input() users:any;

  // Passing data from child to parent
  @Output() parentComponent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    var text = "Hello"
    this.parentComponent.emit(text)
  }

}

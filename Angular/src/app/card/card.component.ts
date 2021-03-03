import { Component, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

 // constructor() { }
  @Input() name: string|any;
  @Input() roll_no : number|any;
  @Input() age: number|any;
  @Input() branch: string|any;

/*  @Input() size: number | any;
  @Output() sizeChange = new EventEmitter<number>();
  
    dec() { this.resize(-1); }
    inc() { this.resize(+1); }
  
    resize(delta: number) {
      this.size = Math.min(40, Math.max(8, +this.size + delta));
      this.sizeChange.emit(this.size);
    } */
  }
  



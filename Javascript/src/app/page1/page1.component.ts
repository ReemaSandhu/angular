import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/comment.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  
  offers:any = []
  comments = [] as any;
  show_comments = [] as any;
  idx = 0;
  
  constructor(private service : CommentService) {}

  getData() {
    this.service.getComments().subscribe(data=>{
      this.comments = data;
      console.log(this.comments);
      for(let i = 0; i < 10 ; i++)
      this.show_comments.push(this.comments[i])
      this.idx = 10;
    })
  }
  onScroll(){
    console.log("yes")
    for(let i= this.idx ; i < this.idx + 10 ; i++)
    this.show_comments.push(this.comments[i])

    this.idx += 10;
  }

  ngOnInit(): void {
    this.getData()
    for (let i = 1; i <= 50; i++) {
      this.offers.push( i*10 + "% off on Category " + i);
    }

  }

}


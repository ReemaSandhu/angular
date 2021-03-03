import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private service : ProductService) { }

  

  products = [] as any;

  plus(item:any) {
    item.quantity++;
    console.log(item.quantity)
};

minus(item:any) {
    if(item.quantity > 0)
    item.quantity--;
}


  getData() {
    this.service.getProducts().subscribe(data=>{
      this.products = data;
      for(var i = 0; i < this.products.length ; i++) {
        var obj = this.products[i];
        obj.quantity = 0
      }
      console.log(this.products);
    })
  }

  ngOnInit(): void {
    this.getData();
  }

}

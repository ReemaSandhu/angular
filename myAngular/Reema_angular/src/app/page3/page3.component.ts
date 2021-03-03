import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
     quantity:any =[1,1,1,1,1,1,1
     ];
   minus(i:any){
     if(this.quantity[i-1]>0) 
     this.quantity[i-1]--;
   }
   plus(i:any){
    this.quantity[i-1]++;
  }
 products=[
   {
     index:1,
    code:101,
     description:"Fritolay Doritos Cool Ranch",
     unit:"198 gm",
     Cost:"$14.99",
     rsp:"$31",
     Margin:"30%",
     category:"Bagged Sweets",
     date:"25-mar-2020",
     qty:"9",
     color:"red",
     img:"../../assets/Products/kurkure3.jpg"
    
   },
   {
    index:2,
    code:102,
    description:"Ruffies Doritos Cool Ranch",
    unit:"158 gm",
    Cost:"$13.99",
    rsp:"$37",
    Margin:"50%",
    category:"Bagged Sweets",
    date:"25-mar-2020",
    qty:"10",
    color:"blue",
    img:"../../assets/Products/kurkure1.jpg"

  },
  {
    index:3,
    code:103,
    description:"Lay's Doritos Cool Ranch",
    unit:"198 gm",
    Cost:"$14.99",
    rsp:"$31",
    Margin:"60%",
    category:"Bagged Sweets",
    date:"25-mar-2020",
    qty:"9",
    color:"green",
    img:"../../assets/Products/kurkure5.jpg"

  },
  {
    index:4,
    code:104,
    description:"sour's Doritos Cool Ranch",
    unit:"138 gm",
    Cost:"$24.99",
    rsp:"$41",
    Margin:"60%",
    category:"Bagged Sweets",
    date:"25-mar-2020",
    qty:"71",
    color:"yellow",
    img:"../../assets/Products/kurkure6.jpg"

  },
  {
    index:5,
    code:105,
    description:"Fritolay Doritos Cool Ranch",
    unit:"498 gm",
    Cost:"$34.99",
    rsp:"$35",
    Margin:"60%",
    category:"Bagged Sweets",
    date:"25-mar-2020",
    qty:"01",
    color:"silver",
    img:"../../assets/Products/kurkure8.jpg"

  },
  {
    index:6,
    code:106,
    description:"sunChips Doritos Cool Ranch",
    unit:"168 gm",
    Cost:"$17.99",
    rsp:"$37",
    Margin:"37%",
    category:"Bagged Sweets",
    date:"25-aug-2020",
    qty:"91",
    color:"red",
    img:"../../assets/Products/kurkure6.jpg"

  },
  {
    index:7,
    code:107,
    description:"fav Doritos Cool Ranch",
    unit:"198 gm",
    Cost:"$14.99",
    rsp:"$37",
    Margin:"60%",
    category:"Bagged Sweets",
    date:"25-mar-2020",
    qty:"7",
    color:"green",
    img:"../../assets/Products/kurkure7.jpg"
  },
  {
    index:8,
    code:108,
    description:"fav Doritos Cool Ranch",
    unit:"198 gm",
    Cost:"$14.99",
    rsp:"$37",
    Margin:"60%",
    category:"Bagged Sweets",
    date:"25-mar-2020",
    qty:"87",
    color:"red",
    img:"../../assets/Products/kurkure1.jpg"
  },
  {
    index:9,
    code:109,
    description:"fav Doritos Cool Ranch",
    unit:"198 gm",
    Cost:"$14.99",
    rsp:"$37",
    Margin:"60%",
    category:"Bagged Sweets",
    date:"25-mar-2020",
    qty:"9",
    color:"green",
    img:"../../assets/Products/kurkure3.jpg"
  }
 ]
}

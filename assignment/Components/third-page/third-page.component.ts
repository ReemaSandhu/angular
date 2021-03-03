import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  columnDefs = [{ field: "Product Code", width:100 }, { field: "Desription" }, { field: "Unit",width:100 }, { field: "Cost" ,width:100}, { field: "RSP",width:100 }, { field: "Margin",width:100 }, { field: "Category",width:100 }, { field: "Last Order",width:100 }, { field: "Ordered Qty",width:100 }];

  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];
}

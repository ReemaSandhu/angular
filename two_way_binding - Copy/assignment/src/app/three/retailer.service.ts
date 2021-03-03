import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {
  url = "https://jsonplaceholder.typicode.com/todos";
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.url);
  }

  usersApi = "https://jsonplaceholder.typicode.com/users";
  getUsersData() {
    return this.http.get(this.usersApi);
  }

  getStores(){
      return [
        { name: "Store 1", items: "30 Shambles, York YO17LK" },
        { name: "Store 2", items: "30 Shambles, York YO17LK" },
        { name: "Store 3", items: "30 Shambles, York YO17LK" },
        { name: "Store 4", items: "30 Shambles, York YO17LK" },
        { name: "Store 5", items: "30 Shambles, York YO17LK" },
        { name: "Store 6", items: "30 Shambles, York YO17LK" },
        { name: "Store 7", items: "30 Shambles, York YO17LK" },
        { name: "Store 8", items: "30 Shambles, York YO17LK" },
        { name: "Store 9", items: "30 Shambles, York YO17LK" },
        { name: "Store 10", items: "30 Shambles, York YO17LK" },
        { name: "Store 11", items: "30 Shambles, York YO17LK" },
        { name: "Store 12", items: "30 Shambles, York YO17LK" },
        { name: "Store 13", items: "30 Shambles, York YO17LK" },
        { name: "Store 14", items: "30 Shambles, York YO17LK" },
      ]
  }
}

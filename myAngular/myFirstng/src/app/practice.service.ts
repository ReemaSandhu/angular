import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { promise } from 'protractor';
import { rejects } from 'assert';
@Injectable({
  providedIn: 'root'
})
export class PracticeService {
  apiUrl="https://jsonplaceholder.typicode.com/todos"
  constructor(private http: HttpClient) { }
  getUsers=()=>{
    return this.http.get(this.apiUrl);
  }
   datas:any;
  getData=(data:any)=>{
    console.log(data);
    this.datas=data;
    console.log(this.datas);
    return this.datas;
  }
  results:any;
  getPromise(){
    let myPromise= new Promise((resolve, reject)=>
    {
      this.http.get(this.apiUrl).toPromise().then(res=>
        {
          this.results=res;
          console.log("data with promise got fatched succesfully");
          resolve;
        }), (err:any)=>{
          console.log(err+"from promise");
          reject(err);
        }
    })
    return myPromise;
  }
}

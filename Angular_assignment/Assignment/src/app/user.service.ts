import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  results:any;
  apiUrl="https://jsonplaceholder.typicode.com/users";
  newAPi="https://reqres.in/api/users";
  constructor(private http:HttpClient) { 

  }
  getUsers()
  {
    return this.http.get(this.apiUrl);
  }

  getNew(){
    return this.http.get(this.newAPi);
  }
  getapidata(){
    let myPromise= new Promise((resolve,reject)=>{
      this.http.get(this.apiUrl).toPromise().then(res=>{
        console.log(res);
        this.results=res;
        resolve();
      },err=>{
        console.log(err,'from service');
        reject(err)
      })
    });
    return myPromise
  }
}

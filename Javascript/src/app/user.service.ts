import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { resolve } from 'dns';
// import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  results:any;
  apiUrl='https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

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



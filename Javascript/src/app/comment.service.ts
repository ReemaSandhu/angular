import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  apiurl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http : HttpClient) { }

  getComments()
  {
    return this.http.get(this.apiurl);
  }
}

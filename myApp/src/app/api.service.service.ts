import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient:HttpClient) { }

  public getAllPosts(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  public getCommentForAPost(id:any){
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  
  getUsers(){
    //return this.http.get('the api-endpoint');

    const users = [
      {id: 454, name: 'Krishna'},
      {id: 45514, name: 'Sam'},
      {id: 986454, name: 'Joey'}
    ];

    return users;
  }
}

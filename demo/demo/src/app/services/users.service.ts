import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

interface User{
  name: string;
  email: string;
  phonenumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  
  getUsers():Observable<User>{

    const headers1 = new HttpHeaders({
      'context-type':'application/json',
      'authenticationToken':'123456'
    });

    const params1 = new HttpParams()
    .set('pageNumber','10')
    .set('pageOptions','100');
    //return this.http.get('the api-endpoint');
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users',{headers:headers1, params:params1});
    // const users = [
    //   {id: 454, name: 'Krishna'},
    //   {id: 45514, name: 'Sam'},
    //   {id: 986454, name: 'Joey'}
    // ];

    // return users;
  }
}

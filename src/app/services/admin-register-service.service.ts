import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { adminUrl } from '../config/api';
import { User } from '../models/user';

const headers: HttpHeaders = new HttpHeaders().set('Content-type', 'application/json')

@Injectable({
  providedIn: 'root'
})




export class AdminRegisterServiceService {



  constructor(private http: HttpClient) { }



  getUser(): Observable<User[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    //  console.log(this.http.get<User[]>(userUrl));
    return this.http.get<User[]>('http://localhost:5002/api/admin/get');
  }

  addUser(user: User): Observable<any> {


    var obj = JSON.stringify(user);
    console.log(obj);
    return this.http.post('http://localhost:5002/api/admin/add', obj, { headers });
  }
}

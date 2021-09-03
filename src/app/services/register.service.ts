import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { userUrl } from '../config/api';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    //  console.log(this.http.get<User[]>(userUrl));
    return this.http.get<User[]>(userUrl);
  }

  addUser(user: User): Observable<any> {
    //console.log(user);
    return this.http.post(userUrl, { user });
  }
}

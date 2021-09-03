import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  userName: string = '';

  constructor() { }

  getUserName() {
    return this.userName;
  }

  setUserName(username: any) {
    this.userName = username;
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MessengerForUserService {

  subject = new Subject()

  constructor() { }

  sendMsg(product: User) {
    //  console.log('hello from last phase');
    //  console.log(product);
    this.subject.next(product) //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }
}

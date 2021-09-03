import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { MessengerForUserService } from 'src/app/services/messenger-for-user.service';
import { RegisterService } from 'src/app/services/register.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  userList: any = [];
  userExists = false;
  isTried = false;

  constructor(
    private msg: MessengerForUserService,
    private registerService: RegisterService,
    private router: Router,
    private session: SharedServiceService
  ) { }

  ngOnInit() {
    this.loadUser();

  }

  loadUser() {
    this.registerService.getUser().subscribe((items: User[]) => {
      this.userList = items;
    })
  }

  login() {
    // console.log(this.model.username);

    for (let i in this.userList) {
      if (this.userList[i].user.username === this.model.username) {

        if (this.userList[i].user.password === this.model.password) {
          this.userExists = true
          break;
        }

      }
    }

    if (this.userExists) {
      this.session.setUserName(this.model.username);
      this.router.navigate(['shop'], { queryParams: { registered: true } });
    } else {
      this.isTried = true;
    }
  }

}
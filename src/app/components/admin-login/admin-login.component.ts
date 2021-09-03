import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { MessengerForUserService } from 'src/app/services/messenger-for-user.service';
import { AdminRegisterServiceService } from 'src/app/services/admin-register-service.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  model: any = {};
  userList: any = [];
  userExists = false;
  isTried = false;

  constructor(
    private msg: MessengerForUserService,
    private registerService: AdminRegisterServiceService,
    private router: Router,
    private builder: FormBuilder,
    private session: SharedServiceService
  ) { }

  ngOnInit() {
    this.loadUser();
    // this.buildForm();



  }

  buildForm() {
    this.model = this.builder.group({

      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  loadUser() {
    this.registerService.getUser().subscribe((items: User[]) => {
      this.userList = items;
    })
  }

  login() {
    console.log(this.model.password);
    console.log(this.userList[16].password);

    for (let i in this.userList) {
      if (this.userList[i].username === this.model.username) {

        if (this.userList[i].password === this.model.password) {
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
      //  this.model.reset();
    }
  }
}

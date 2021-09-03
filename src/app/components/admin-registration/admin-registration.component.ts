import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AdminRegisterServiceService } from 'src/app/services/admin-register-service.service';
import { User } from 'src/app/models/user';
import { MessengerForUserService } from 'src/app/services/messenger-for-user.service';
import { Router } from '@angular/router';

function passwordsMatchValidator(form: any) {
  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordsMatch: true })
  } else {
    confirmPassword.setErrors(null)
  }

  return null
}

/**
 * If the data is valid return null else return an object
 */
function symbolValidator(control: any) { //control = registerForm.get('password')
  if (control.hasError('required')) return null;
  if (control.hasError('minlength')) return null;

  if (control.value.indexOf('@') > -1) {
    return null
  } else {
    return { symbol: true }
  }
}

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {
  userList: any = [];
  userExists = false;
  registerForm: FormGroup | any;
  @Input() user!: User

  constructor(
    private msg: MessengerForUserService,
    private builder: FormBuilder,
    private registerService: AdminRegisterServiceService,
    private router: Router

  ) { }

  ngOnInit() {
    this.buildForm();
    this.loadUser();

  }

  loadUser() {
    this.registerService.getUser().subscribe((items: User[]) => {

      this.userList = items;
    })
  }

  buildForm() {
    this.registerForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: ''
    }, {
      validators: passwordsMatchValidator
    })
  }

  register() {

    this.user = new User(this.registerForm.controls['name'].value,
      this.registerForm.controls['email'].value,
      this.registerForm.controls['username'].value,
      this.registerForm.controls['password'].value);
    // console.log('hello from interface');
    // console.log(this.userList);
    // console.log(this.user);

    for (let i in this.userList) {
      if (this.userList[i].email === this.user.email) {

        this.userExists = true
        break;
      }
    }

    if (!this.userExists) {
      this.registerService.addUser(this.user).subscribe(() => {
        this.msg.sendMsg(this.user)
      })
      this.router.navigate(['adminLogin'], { queryParams: { registered: true } });
    } else {
      this.registerForm.reset();
    }


  }
}

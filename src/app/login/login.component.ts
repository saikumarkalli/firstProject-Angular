import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../Models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor() { }
  ngOnInit() {

  }

  login(loginForm: { email: string, password: string }) {
    var loginObj = new Login();
    
    loginObj.email=loginForm.email;
    loginObj.role=this.role(loginObj.email)
    loginObj.token=loginForm.password

    console.log(loginObj);
    //converting obj to json and inserting in local storage..
    console.log(localStorage.setItem('token', JSON.stringify(loginObj))) 
  }

  role(userId: string): string {
    if (userId === "saikumar" || userId === "admin") {
      return "admin"
    }
    return "user"
  }

}

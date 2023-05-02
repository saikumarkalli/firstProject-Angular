import { Injectable } from '@angular/core';
import { toDataSourceRequest } from '@progress/kendo-data-query';
import { Login } from '../Models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn() {
    return !!localStorage.getItem('token') //'!!' will returns the boolean value if it's exists
  }

  HasAccess(): boolean {
    var localToken = localStorage.getItem('token');
    if (localToken) {
      var jsonData = JSON.parse(localToken);
      var user = <Login>jsonData;
      //console.log(user.role);
      if (user.role === 'admin') { return true }
      else { return false }
    }
    return false;
  }

  RoleBaseControls()
  {
    var data=[{
      ComponentName:"EmployeeComponent",
      CanEdit:true,
      CanView:false,
      CanDelete:true
    },
    {
      ComponentName:"EmployeeReportComponent",
      CanEdit:true,
      CanView:true,
      CanDelete:false
    }

  ]

    return data;
  }

}

import { Injectable } from '@angular/core';
import { Nav } from '../Models/Employee/nav.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }
  nav!:Nav;
  OnInint()
  {

  }

  BeforeAdminLogin():Nav
  {
    this.nav.Home=true;
    this.nav.About=true;
    this.nav.Career=true;
    this.nav.Employee=false;
    this.nav.EmployeeReports=false;
    this.nav.LogIn=true;
    this.nav.LogOut=false;

    return this.nav;
  }

  AfterAdminLogin():Nav
  {
    this.nav.Home=true;
    this.nav.About=true;
    this.nav.Career=true;
    this.nav.Employee=true;
    this.nav.EmployeeReports=true;
    this.nav.LogIn=false;
    this.nav.LogOut=true;

    return this.nav;
  }

}

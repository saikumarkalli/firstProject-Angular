import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModule } from '../Models/Employee/EmployeeModel';
import { ApiServices } from './api.services';
import { appCongfig } from "../app.config"; 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
     private _apiService:ApiServices,
     private _config:appCongfig
     ) { }

  getData()
  {
    var controllerUrl:string ="User/GetData";
    var url:string =`${this._config.GetBaseUrl()}/${controllerUrl}`;
    return this._apiService.GetRequest(url);

  }

  insertUserAPI(userData:EmployeeModule)
  {
    var controllerUrl:string ="User/InsertEmployee";
    var url:string =`${this._config.GetBaseUrl()}/${controllerUrl}`;
    // console.log(result);
    return this._apiService.PostRequest(url,userData);
  }

}

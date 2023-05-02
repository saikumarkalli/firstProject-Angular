import { Component } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { EmployeeModule } from 'src/app/Models/Employee/EmployeeModel';
import{EmployeeService} from 'src/app/services/employee.service'

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent {

   constructor(private empService: EmployeeService){

  // this.empService.getData().subscribe(data=> console.warn(data))
   }

   listUsers$:any;
ngOnInit()
{
  this.GetUserData();
}

GetUserData()
{
  // this.empService.getData().subscribe(data=> console.warn(data))
  
  this.empService.getData()
  .subscribe((data)=>
  { this.listUsers$=data
  },
  error=>{console.log(error)}
  );
}

createUser(userData:EmployeeModule)
{
  var insertDataMapping =new EmployeeModule();

  insertDataMapping.emailid=userData.emailid;
  insertDataMapping.empname=userData.empname;
  insertDataMapping.phonenumber=userData.phonenumber.toString();
  insertDataMapping.id=Number(userData.id);

  console.log(this.empService.insertUserAPI(insertDataMapping));

  this.GetUserData();
  
}

SaveMessage()
{
  console.warn("Sucess!");
}

}

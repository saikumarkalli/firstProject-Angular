import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  heading:string ="Registrations";
  headingAline:string="text-center";
  searchAline:string="text-right"
  searchData:string='';

  searchValue(eventData :Event)
  {
      this.searchData=(<HTMLInputElement>eventData.target).value;
  }

}

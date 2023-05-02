import { Component } from '@angular/core';
import { RoleAccess } from 'src/app/Models/Employee/EmployeeModel';

@Component({
  selector: 'app-employee-report',
  templateUrl: './employee-report.component.html',
  styleUrls: ['./employee-report.component.scss']
})
export class EmployeeReportComponent {
  CanEdit!: boolean;
  CanDelete!: boolean;
  CanView!: boolean;

  ngOnInit() {
    this.roleSettings();

  }


  public data: any[] = [
    {
      ProductID: 1,
      ProductName: 'Chai',
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages'
      }
    },
    {
      ProductID: 1,
      ProductName: 'Chai',
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages'
      }
    },
    {
      ProductID: 1,
      ProductName: 'Chai',
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages'
      }
    }
  ];

  public roleSettings() {
    var roledata = sessionStorage.getItem("roleSettings");
    if (roledata) {
      var sessionData = JSON.parse(roledata);
      var roleObj = <RoleAccess>sessionData;

      this.CanEdit = roleObj.CanEdit;
      this.CanDelete = roleObj.CanDelete;
      this.CanView = roleObj.CanDelete

    }
    else {
      this.CanEdit = false;
      this.CanDelete = false;
    }

  }

}

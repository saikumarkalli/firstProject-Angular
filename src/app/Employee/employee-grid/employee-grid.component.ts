import { Component } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { ColDef, GridOptions } from "ag-grid-community";
import { RoleAccess } from 'src/app/Models/Employee/EmployeeModel';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.scss']
})


export class EmployeeGridComponent {
  //private gridOptions : GridOptions;

  rows: any[] = [];
  columnDefs: ColDef[];
  listUsers$: any;
  CanEdit!:boolean;
  CanDelete!:boolean;
  CanView!:boolean;



  public gridData!: GridDataResult;


  constructor(private empService: EmployeeService) {
    this.GetUserData();
    this.columnDefs = this.GetColumns();
    this.rows = this.listUsers$;
    this.loadData();
    


  }

  ngOnInit() {
    this.GetUserData();
    this.roleSettings();


  }

  GetColumns() {
    return this.columnDefs = [
      { headerName: 'Employee Name', field: 'empName', sortable: true, filter: true },
      { headerName: 'Email ID', field: 'emailId', sortable: true, filter: true },
      { headerName: 'Phone Number', field: 'phoneNumber', sortable: true, filter: true }
    ]
  }

  GetRowData() {
    return this.rows = [
      {
        empName: ".net",
        emailId: "dotnet@gmail.com",
        phoneNumber: "1234567890"
      },
      {
        empName: "c#",
        emailId: "c#@gmail.com",
        phoneNumber: "1234567890"
      }
    ]
  }

  GetUserData() {
    // this.empService.getData().subscribe(data=> console.warn(data))

    this.empService.getData()
      .subscribe((data) => {
        console.log(data);
        this.listUsers$ = data
      },
        error => { console.log(error) }
      );
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

  public loadData() {
    this.gridData = {
      data: this.listUsers$,
      total: this.data.length
    };
  }

  public roleSettings() {
    var roledata = sessionStorage.getItem("roleSettings");
    if (roledata) {
      var sessionData = JSON.parse(roledata);
      var roleObj = <RoleAccess>sessionData;
      
      this.CanEdit=roleObj.CanEdit;
      this.CanDelete=roleObj.CanDelete;
      this.CanView=roleObj.CanDelete
      
    }
    else{
      this.CanEdit=false;
      this.CanDelete=false;
    }

  }

}

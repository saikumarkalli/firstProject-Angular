import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './Home/home-component/home-component.component';
import { AboutComponentComponent } from './About/about-component/about-component.component';
import { CareersComponent } from './Careers/careers/careers.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { SubmitFormComponent } from './Employee/submit-form/submit-form.component';
import { EmployeeGridComponent } from './Employee/employee-grid/employee-grid.component';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './Auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { EmployeeReportComponent } from './Employee/employee-report/employee-report.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    CareersComponent,
    TableComponent,
    FormComponent,
    SubmitFormComponent,
    EmployeeGridComponent,
    EmployeeComponent,
    LoginComponent,
    NotFoundComponent,
    LandingPageComponent,
    AdminDashbordComponent,
    EmployeeReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    AppRoutingModule,
    FormsModule,
    GridModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

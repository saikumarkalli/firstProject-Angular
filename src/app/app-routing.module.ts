import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './About/about-component/about-component.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { AuthGuard } from './Auth/auth.guard';
import { RoleGuard } from './Auth/role.guard';
import { CareersComponent } from './Careers/careers/careers.component';
import { EmployeeReportComponent } from './Employee/employee-report/employee-report.component';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { HomeComponentComponent } from './Home/home-component/home-component.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponentComponent },
  {path: 'About', component: AboutComponentComponent },
  {path:'home', component:HomeComponentComponent,canActivate:[AuthGuard]},
  {path:'career',component:CareersComponent,canActivate:[AuthGuard,RoleGuard],},
  {path:'employee',component:EmployeeComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'employee-report',component:EmployeeReportComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'login',component:LoginComponent},
  {path:'admin-dashbord',component:AdminDashbordComponent,canActivate:[AuthGuard]},
  {path:'**',component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {

  
}





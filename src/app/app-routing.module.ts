import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CryptoSinglePriceComponent } from './crypto-single-price/crypto-single-price.component';
import { CryptoHistoryComponent } from './crypto-history/crypto-history.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { ErrorComponent } from './error/error.component';
import { EmployeeComponent } from './employee/employee.component';
import { SalaryComponent } from './salary/salary.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { EmployeeWithIdComponent } from './employee-with-id/employee-with-id.component';
import { TemplateFormsDemoComponent } from './template-forms-demo/template-forms-demo.component';

const routes: Routes = [
  {path : "", component : LandingComponent },
  {path : "crypto", component : CryptoSinglePriceComponent},
  {path : "history", component : CryptoHistoryComponent},
  {path : "user", component : GithubUserComponent},
  {path : "project", component : GithubReposComponent},
  {
    path : "employee",
    children:[
      {path : "", component: EmployeeComponent},
      {path:"salary", component: SalaryComponent},
      {path: "update", component: UpdateDataComponent}
    ]
  },
  //path parameter
  {path : "details/:eid",component : EmployeeWithIdComponent},
  {path : "template", component: TemplateFormsDemoComponent},
  {path : "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

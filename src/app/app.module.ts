import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select'; 
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import {MatButtonModule} from '@angular/material/button'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeWithServiceComponent } from './employee-with-service/employee-with-service.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { CryptoSinglePriceComponent } from './crypto-single-price/crypto-single-price.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { CryptoHistoryComponent } from './crypto-history/crypto-history.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { PythonApiTestComponent } from './python-api-test/python-api-test.component';
import {MatInputModule} from '@angular/material/input';
import { LandingComponent } from './landing/landing.component';
import { ErrorComponent } from './error/error.component';
import { SalaryComponent } from './salary/salary.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { EmployeeWithIdComponent } from './employee-with-id/employee-with-id.component';
import { TemplateFormsDemoComponent } from './template-forms-demo/template-forms-demo.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    EmployeeWithServiceComponent,
    GithubUserComponent,
    CryptoSinglePriceComponent,
    GithubReposComponent,
    CryptoHistoryComponent,
    CalculatorComponent,
    PipeDemoComponent,
    PythonApiTestComponent,
    LandingComponent,
    ErrorComponent,
    SalaryComponent,
    UpdateDataComponent,
    EmployeeWithIdComponent,
    TemplateFormsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

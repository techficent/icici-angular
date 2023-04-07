import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'

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
import { FormsModule } from '@angular/forms';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

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
    PipeDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

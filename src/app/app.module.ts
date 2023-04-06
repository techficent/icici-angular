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

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    EmployeeWithServiceComponent,
    GithubUserComponent,
    CryptoSinglePriceComponent,
    GithubReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

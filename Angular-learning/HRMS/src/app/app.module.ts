import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { FormsModule } from '@angular/forms';

//For HTTP Connectivity
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployeeBioComponent } from './employees/employee-bio/employee-bio.component';
import { CountriesComponent } from './countries/countries.component';
import { JobsComponent } from './jobs/jobs.component';
import { DepartmentsComponent } from './departments/departments.component';
import { StocksComponent } from './stocks/stocks.component';
import { DailyComponent } from './stocks/daily/daily.component';
import { TeejayComponent } from './teejay/teejay.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeBioComponent,
    CountriesComponent,
    JobsComponent,
    DepartmentsComponent,
    StocksComponent,
    DailyComponent,
    TeejayComponent
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

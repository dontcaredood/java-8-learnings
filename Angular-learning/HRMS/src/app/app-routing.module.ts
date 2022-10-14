import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeBioComponent } from './employees/employee-bio/employee-bio.component';
import { EmployeesComponent } from './employees/employees.component';
import { JobsComponent } from './jobs/jobs.component';
import { DailyComponent } from './stocks/daily/daily.component';
import { StocksComponent } from './stocks/stocks.component';
import { TeejayComponent } from './teejay/teejay.component';

const routes: Routes = [
  { path: 'employeeBasic', component: EmployeesComponent},
  { path: 'employeeBasic/employeeBio/:id', component: EmployeeBioComponent },
  { path: 'countries', component: CountriesComponent },
  { path : 'jobs', component : JobsComponent},
  { path : 'departments', component : DepartmentsComponent},
  { path : 'teejay', component: TeejayComponent},
  { path : 'stocks', component : StocksComponent, 
    children:[
      {path : 'daily/:stockName', component : DailyComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

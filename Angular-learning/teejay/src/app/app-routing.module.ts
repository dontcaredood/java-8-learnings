import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { AddExitComponent } from './add-exit/add-exit.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      { path: "history", component: TradeHistoryComponent },
      { path: "addEntry", component: AddEntryComponent },
      { path: "addExit", component: AddExitComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

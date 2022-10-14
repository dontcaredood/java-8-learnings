import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
//For HTTP Connectivity
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActiveTradesComponent } from './active-trades/active-trades.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { AddExitComponent } from './add-exit/add-exit.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TradeHistoryComponent,
    ActiveTradesComponent,
    AddEntryComponent,
    AddExitComponent
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

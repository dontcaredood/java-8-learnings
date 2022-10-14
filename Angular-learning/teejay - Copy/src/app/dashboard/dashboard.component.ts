import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserResponse } from 'src/model/UserResponse';
import { DataService } from 'src/service/data.service';
import { ActiveTrade } from 'src/model/ActiveTrade';
import { TeejayService } from 'src/service/teejay.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public loginResponse!: UserResponse
  
  loginId : string = ''
  errorResponse: any;
  constructor(private router: Router, private _data: DataService, private teejay: TeejayService) { }
  ActiveTradesOn:boolean = true
  ngOnInit(): void {
    console.log("Dashboard")
    this.loginResponse = this._data.getLoginResponse()
    this._data.setLoginResponse(this.loginResponse)
    this.loginId = this.loginResponse.loginId
    this._data.setLoginId(this.loginId)
    //this.ActiveTradesOn = true
  }
  tradeHistory(){
    this.ActiveTradesOn = false 
    this.router.navigate(["dashboard/history"]);
  }
  dashboard(){
    this.ActiveTradesOn = true 
    this.router.navigate(["dashboard"]);
  }
  logout(){
    this.ActiveTradesOn = false 
    this.router.navigate(["login"]);
  }

  addEntry(){
    this.ActiveTradesOn = false 
    this.router.navigate(["dashboard/addEntry"]);
  }
  

}

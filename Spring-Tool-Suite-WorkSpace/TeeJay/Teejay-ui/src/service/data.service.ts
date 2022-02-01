import { Injectable } from '@angular/core';
import { ActiveTrade } from 'src/model/ActiveTrade';
import { UserResponse } from 'src/model/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  loginResponse!: UserResponse;
  loginId!: string

  tickerList: any;
  activeTrades!: ActiveTrade[]

  setLoginResponse(input: any) {
    //console.log(input)
    console.log("setLoginResponse: " + this.loginResponse)
    this.loginResponse = new UserResponse(input)

  }
  getLoginResponse() {
    console.log('getLoginResponse ' + this.loginResponse)
    return this.loginResponse
  }

  getLoginId() {
    console.log('getLoginId ' + this.loginId)
    return this.loginId
  }
  setLoginId(loginId: any) {
    console.log('setLoginId ' + loginId)
    this.loginId = loginId
  }


  setLTPData(tickerList: any, activeTrades: any) {
    console.log("SetLTPData: "+tickerList+" "+activeTrades)
    this.activeTrades = activeTrades
    this.tickerList = tickerList
  }
  getTickerList() {
    return this.tickerList
  }
  getActiveTrades(){
    return this.activeTrades
  }
}

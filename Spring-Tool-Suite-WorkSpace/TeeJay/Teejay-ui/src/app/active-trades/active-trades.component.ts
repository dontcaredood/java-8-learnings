import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveTrade } from 'src/model/ActiveTrade';
import { LTP } from 'src/model/LTP';
import { UserResponse } from 'src/model/UserResponse';
import { DataService } from 'src/service/data.service';
import { TeejayService } from 'src/service/teejay.service';

@Component({
  selector: 'app-active-trades',
  templateUrl: './active-trades.component.html',
  styleUrls: ['./active-trades.component.css']
})
export class ActiveTradesComponent implements OnInit {
  activeTrades: ActiveTrade[] = []
  data: any = {}
  errorResponse: string | undefined;
  loginResponse!: UserResponse
  ltpData: any;
  loginId: string = this._data.getLoginId();
  tickerList: string[] = []
  ltpList: LTP[] = []
  activeTradesForLTP!: any
  tickerListForLTP!: any
  constructor(private router: Router,private _data: DataService, private teejay: TeejayService) { }

  ngOnInit(): void {
    console.log("Active Trades Component")
    this.loginResponse = this._data.getLoginResponse()
    this._data.setLoginResponse(this.loginResponse)
    this.fetchActiveTrades()
    this.activeTradesForLTP = this._data.getActiveTrades()
    this.tickerListForLTP = this._data.getTickerList()
    //var intervalId = setInterval(this.getLTPList,2000,this.activeTradesForLTP,this.tickerListForLTP)

    this.getLTPList(this.activeTradesForLTP, this.tickerListForLTP)
    console.log(this.ltpList)

  }

  fetchActiveTrades() {
    this.teejay.getActiveTrades(this.loginId).subscribe(response => {
      if (response) {
        this.data = response
        for (let i = 0; i < this.data.length; i++) {
          let activeTrade = new ActiveTrade(this.data[i])
          this.tickerList.push(activeTrade.securityName)
          this.activeTrades.push(activeTrade)
        }
        this._data.setLTPData(this.tickerList, this.activeTrades)
      }

    }, error => {
      console.log(error)
      this.errorResponse = error.error.message
    })
  }


  getLTPList(activeTrades: any, tickerList: any) {
    console.log(tickerList);
    this.teejay.getLTPList(tickerList).subscribe(response => {
      console.log(response)
      this.ltpData = response
      for (let i = 0; i < this.ltpData.length; i++) {
        let ltp = new LTP(this.ltpData[i])
        let pnlTemp = (ltp.ltp - activeTrades[i].avgPrice) * activeTrades[i].quantity
        ltp.pnl = Math.round(pnlTemp * 100) / 100
        let pnlP = (ltp.pnl / activeTrades[i].tradeCaptial)
        ltp.pnlPercent = pnlP
        ltp.currentCap = ltp.ltp * activeTrades[i].quantity
        this.ltpList.push(ltp)
        this.activeTrades[i].LTP = ltp
        if (ltp.pnl > 0) {
          this.activeTrades[i].arrow = "up"
        } else {
          this.activeTrades[i].arrow = "down"
        }
      }
      console.log(this.ltpList)


    }, error => {
      console.log(error)
      this.errorResponse = error.error.message
    })

  }

  fetchLTP() {
    
    this.ltpList=[]
    this.activeTradesForLTP = this._data.getActiveTrades()
    this.tickerListForLTP = this._data.getTickerList()
    this.getLTPList(this.activeTradesForLTP, this.tickerListForLTP)
  }

  disableLtp(){
    this.ltpList=[]
  }
}

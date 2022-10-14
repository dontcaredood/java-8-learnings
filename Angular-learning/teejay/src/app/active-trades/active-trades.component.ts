import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveTrade } from 'src/model/ActiveTrade';
import { ExitTrade } from 'src/model/ExitTrade';
import { LTP } from 'src/model/LTP';
import { TradeEntries } from 'src/model/TradeEntries';
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
  isExitActive :boolean = false
  viewData1!: ActiveTrade; 
  inputArrayNumber :number = 0
  userId!: number;
  totalInvestment:number =0
  currentValue:number =0
  totalPnl:number =0
  totalPnlPercent:number = 0
  isVisible: boolean =false;
  constructor(private router: Router,private _data: DataService, private teejay: TeejayService) { }

  ngOnInit(): void {
    this.loginResponse = this._data.getLoginResponse()
    this._data.setLoginResponse(this.loginResponse)
    this.fetchActiveTrades()
    this.activeTradesForLTP = this._data.getActiveTrades()
    this.tickerListForLTP = this._data.getTickerList()
    //var intervalId = setInterval(this.getLTPList,2000,this.activeTradesForLTP,this.tickerListForLTP)
    this.isExitActive = false
  }

  fetchActiveTrades() {
    this.teejay.getActiveTrades(this.loginId).subscribe(response => {
      if (response) {
        this.data = response
        for (let i = 0; i < this.data.length; i++) {
          let activeTrade = new ActiveTrade(this.data[i])
          this.tickerList.push(activeTrade.securityName)
          this.totalInvestment = this.totalInvestment+activeTrade.tradeCaptial
          this.activeTrades.push(activeTrade)
        }
        this._data.setLTPData(this.tickerList, this.activeTrades)
      }
    }, error => {
      this.errorResponse = error.error.message
    })
  }


  public getLTPList(activeTrades: any, tickerList: any, Optional?: any) {
    this.ltpList=[]
    let pnlZero = 0
    this.teejay.getLTPList(tickerList).subscribe(response => {
      this.ltpData = response
      let tempCurrentValue = 0
      let tempTotalPnl =0
      for (let i = 0; i < this.ltpData.length; i++) {
        let ltp = new LTP(this.ltpData[i])
        let pnlTemp = (ltp.ltp - activeTrades[i].avgPrice) * activeTrades[i].quantity
        ltp.change = Math.round((ltp.ltp - activeTrades[i].avgPrice) * 100)/100
        ltp.pnl = Math.round(pnlTemp * 100) / 100
        let pnlP = (ltp.pnl / activeTrades[i].tradeCaptial)
        ltp.pnlPercent = pnlP
        ltp.currentCap = ltp.ltp * activeTrades[i].quantity
        tempCurrentValue = tempCurrentValue+ltp.currentCap
        this.currentValue = tempCurrentValue
        tempTotalPnl = tempTotalPnl+ltp.pnl
        this.totalPnl = tempTotalPnl
        this.totalPnlPercent = this.totalPnl/this.currentValue
        this.ltpList.push(ltp)
        this.activeTrades[i].LTP = ltp
        if (ltp.pnl > pnlZero) {
          this.activeTrades[i].arrow = "up"
        } else {
          this.activeTrades[i].arrow = "down"
        }
      }
    }, error => {
      console.log(error)
      this.errorResponse = error.error.message
    })

  }
  intervalId :any =0
  fetchLTP() {
    this.activeTradesForLTP = this._data.getActiveTrades()
    this.tickerListForLTP = this._data.getTickerList()
    this.ltpList=[]
    this.isVisible = true
    this.intervalId = setInterval(() => {
      this.getLTPList(this.activeTradesForLTP,this.tickerListForLTP)
    }, 2000);
  }


  disableLtp(){
    
    clearInterval(this.intervalId)
    this.ltpList=[]
  }


  closeTrade(closeData:any, inputArrayNumber:number){
    console.log(closeData)
    let tradeId = this.activeTrades[inputArrayNumber].tradeId
    let exitTrade = new ExitTrade()
    exitTrade.exitPrice = closeData.value.exitPrice
    exitTrade.exitRemarks = closeData.value.exitRemarks
    exitTrade.tradeId = tradeId
    console.log(exitTrade)
    if(confirm("Are you sure to exit "+this.activeTrades[inputArrayNumber].securityName+"?")){
      this.teejay.addExit(exitTrade).subscribe(response => {
        console.log(response)
      }, error => {
        console.log(error)
        this.errorResponse = error.error.message
      })
    }else{

    }
   
  }
  

  addEntry(entryData:any){
    let newEntry = new TradeEntries(entryData.value)
    newEntry.userId =  this.userId
    console.log(newEntry)

    this.teejay.addEntry(newEntry).subscribe(response => {
      if(response){
        console.log("Response from Add Entry "+response)
        alert('New Entry for '+newEntry.securityName+" has been added!")
        this.router.navigate(["dashboard"]);
        
        // this.data.setLoginResponse(responseData)
        // this.router.navigate(["dashboard"])
      }
      //console.log(response)
      
    }, error=>{
      console.log(error)
      this.errorResponse = error.error.message
      if(this.errorResponse=="Requested user Not Found"){
        this.errorResponse = "Login Id not found. Please signup and try login."
      }
      
    })
  }

  justClick(input:any){
    this.inputArrayNumber = input
    console.log(this.inputArrayNumber)
  }
}

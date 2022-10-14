import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockData } from 'src/model/StocksModel/StockData';
import { StocksService } from 'src/service/stocks.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  timeSeries : string = "Time Series (Daily)"
  data:any = {}
  dailyData : StockData | undefined 
  constructor(private stockService: StocksService,  private activeRoute:ActivatedRoute) { }
  stockName : string = ""

  ngOnInit(): void {
    this.calculatePnL()
  }

  // getDailyData(stockName:any){
  //   this.router.navigate(["stocks/daily",stockName]);
  // }

  
getDetails(ticker:any){
  this.dailyData= undefined
  let close = 0
  this.activeRoute.paramMap.subscribe((a: any) => this.stockName = a.params.stockName);
  //console.log(this.stockName)
  this.stockService.getDailyQuote(ticker).subscribe(response => {
    if(response["Error Message"]){
      alert(response["Error Message"])
    }else{
      this.data = response[this.timeSeries]
      let temp = this.data["2022-01-07"]
      close = temp["4. close"]
      let volume = temp["5. volume"]
      this.dailyData = new StockData(ticker, close, volume)
      console.log(this.dailyData)
    }
    console.log(close - this.avgPrice)
  })
}

  getYesterdayDate() {
    let date = new Date()
    date.setDate(date.getDate() - 1)
    let yesterday = formatDate(date, 'yyyy-MM-dd', 'en-us')
    return yesterday
  }
  avgPrice:number = 120
  calculatePnL(){
    console.log(this.avgPrice)
    
  }
}

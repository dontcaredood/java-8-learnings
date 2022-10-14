import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/service/stocks.service';
import { formatDate } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StockData } from 'src/model/StocksModel/StockData';
@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
  timeSeries : string = "Time Series (Daily)"
  data:any = {}
  dailyData : StockData | undefined 
  constructor(private stockService: StocksService,  private activeRoute:ActivatedRoute) { }
  stockName : string = ""
  ngOnInit(): void {
    console.log("In")
   this.getDetails()
  }
getDetails(){
  this.dailyData= undefined
  this.activeRoute.paramMap.subscribe((a: any) => this.stockName = a.params.stockName);
  //console.log(this.stockName)
  this.stockService.getDailyQuote(this.stockName).subscribe(response => {
    if(response["Error Message"]){
      alert(response["Error Message"])
    }else{
      this.data = response[this.timeSeries]
      let temp = this.data["2022-01-07"]
      let close = temp["4. close"]
      let volume = temp["5. volume"]
      this.dailyData = new StockData(this.stockName, close, volume)
      console.log(this.dailyData)
    }
    
  })
}

  getYesterdayDate() {
    let date = new Date()
    date.setDate(date.getDate() - 1)
    let yesterday = formatDate(date, 'yyyy-MM-dd', 'en-us')
    return yesterday
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TradeHistory } from 'src/model/TradeHistory';
import { UserResponse } from 'src/model/UserResponse';
import { DataService } from 'src/service/data.service';
import { TeejayService } from 'src/service/teejay.service';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})
export class TradeHistoryComponent implements OnInit {
  public loginResponse!: UserResponse
  loginId!: string;
  errorResponse: any;
  data:any ={}
  tradeHistories: TradeHistory[] =[]
  constructor(private activeRoute: ActivatedRoute, private _data: DataService,private teejay: TeejayService) { }

  ngOnInit(): void {
    this.loginResponse = this._data.getLoginResponse()
    this.loginId = this.loginResponse.loginId
   // this.activeRoute.paramMap.subscribe((a: any) => this.loginId = a.params.loginId);
    console.log(this.loginResponse)
    this._data.setLoginResponse(this.loginResponse)
    this.getTradeHistories()
  }

  getTradeHistories() {
    this.teejay.getTradeHistory(this.loginId).subscribe(response => {
      if (response) {
        
        this.data =  response
        for(let i = 0; i< this.data.length; i++){
          let tradeHistory = new TradeHistory(this.data[i])
          this.tradeHistories.push(tradeHistory)
        }
        console.log(this.tradeHistories)
      }
      //console.log(response)

    }, error => {
      console.log(error)
      this.errorResponse = error.error.message
      if (this.errorResponse == "No history found.") {
        this.errorResponse = "No history found!"
      }
    })
  }
}


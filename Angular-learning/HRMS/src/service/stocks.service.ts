import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  public baseURL: string = "https://www.alphavantage.co/query?"
  public apikey : string = "&apikey=SM0SE6X8LWOSI92W"

  //function=TIME_SERIES_DAILY&symbol=GMRINFRA.BSE&outputsize=full&apikey=SM0SE6X8LWOSI92W
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  getDailyQuote(stock: string): Observable<any> {
   
    console.log(`${this.baseURL}function=TIME_SERIES_DAILY&symbol=${stock}.BSE&outputsize=full${this.apikey}`)
    return this.http.get(`${this.baseURL}function=TIME_SERIES_DAILY&symbol=${stock}.BSE&outputsize=compact${this.apikey}`)
  }

}

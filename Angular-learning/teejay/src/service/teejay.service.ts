import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from 'src/model/UserResponse';
import { ExitTrade } from 'src/model/ExitTrade';
@Injectable({
  providedIn: 'root'
})
export class TeejayService {
  loginResponse!: UserResponse;
  public baseURL: string = "http://localhost:8080/teejay/"
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');


    doLogin(loginId: string, password: string): Observable<any> {
      //console.log(`${this.baseURL}/${loginId}/${password}`)
      return this.http.post(`${this.baseURL}login/${loginId}/${password}`, {'headers':this.headers})
    }

    getTradeHistory(loginId: string): Observable<any> {
      return this.http.get(`${this.baseURL}tj/fetchHistory/${loginId}`, {'headers':this.headers})
    }
    
    getActiveTrades(loginId:any){
      return this.http.get(`${this.baseURL}tj/fetch/${loginId}`, {'headers':this.headers})
    }

    getLTPList(tickerList:any){
      
      return this.http.post(`${this.baseURL}tj/getLTP`,tickerList, {'headers':this.headers})
    }

    addEntry(entryData:any){
      return this.http.post(`${this.baseURL}tj/addEntry`,entryData, {'headers':this.headers})
    }

    addExit(exitData:ExitTrade){
      return this.http.post(`${this.baseURL}tj/addExit`,exitData, {'headers':this.headers})
    }
  
}

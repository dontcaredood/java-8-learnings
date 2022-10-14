import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  public baseURL:string ="http://localhost:8090/"
  constructor(private http:HttpClient) { }
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  fetchData(): Observable<any> {
  return this.http.get( `${this.baseURL}`,{ 'headers': this.headers });
}
}


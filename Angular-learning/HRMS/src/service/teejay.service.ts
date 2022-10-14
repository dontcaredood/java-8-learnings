import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeejayService {
  public baseURL: string = "http://localhost:8080/teejay/login"
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

    doLogin(loginId: string, password: string): Observable<any> {
      console.log(`${this.baseURL}/${loginId}/${password}`)
      return this.http.post(`${this.baseURL}/${loginId}/${password}`, {'headers':this.headers})
    }
  
}

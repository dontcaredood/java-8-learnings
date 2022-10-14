import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HrmsService {
  public baseURL:string ="http://localhost:8090/hr/"
  constructor(private http:HttpClient) { }
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  

  showEmployees():Observable<any>{
    //console.log("Show Employees")
    return this.http.get(`${this.baseURL}showEmployees`, {'headers':this.headers});
  }

  showEmployeesById(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}showEmployeeById/${id}`, {'headers':this.headers});
  }

  showCountries():Observable<any>{
    return this.http.get(`${this.baseURL}showCountries`, {'headers':this.headers});
  }

  showJobs():Observable<any>{
    return this.http.get(`${this.baseURL}showJobs`, {'headers' : this.headers});
  }

  showDepartments():Observable<any>{
    return this.http.get(`${this.baseURL}showDepartments`, {'headers' : this.headers})
  }
}

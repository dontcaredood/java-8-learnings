import { Component, OnInit } from '@angular/core';
import { Person } from '../Model/person';
import { AppServiceService } from '../Service/app-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  model: any = {};
  p:any;
  constructor(private http:AppServiceService) { }
  ngOnInit(): void {
    this.http.fetchData().subscribe(
    response => {     
      this.p = new Person(response)
      console.log(this.p)
    },
    error => {
      console.log(error);
    });
    
  }

  addPersonData(model:any[]){
  
  }
}

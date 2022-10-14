import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/model/Countries';
import { HrmsService } from 'src/service/hrms.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private service: HrmsService) { }
  data: any = {}
  countriesList : Countries[] = []
  ngOnInit(): void {
    this.service.showCountries().subscribe(response => {
      //console.log(response)
      this.data = response;
      for(let i = 0; i< this.data.length; i++){
        let c = new Countries(this.data[i])
        this.countriesList.push(c)
      }
      //console.log(this.countriesList)
       })
  }
}

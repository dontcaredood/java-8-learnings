import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TradeEntries } from 'src/model/TradeEntries';
import { DataService } from 'src/service/data.service';
import { TeejayService } from 'src/service/teejay.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  errorResponse: any;

  constructor(private _data: DataService, private router: Router,private teejay:TeejayService) { }
  userId  !:number
  ngOnInit(): void {
    this.userId = this._data.getLoginResponse().userId
  }
  


  addEntry(entryData:any){
    let newEntry = new TradeEntries(entryData.value)
    newEntry.userId =  this.userId
    console.log(newEntry)

    this.teejay.addEntry(newEntry).subscribe(response => {
      if(response){
        console.log("Response from Add Entry "+response)
        alert('New Entry for '+newEntry.securityName+" has been added!")
        this.router.navigate(["dashboard"]);
        
        // this.data.setLoginResponse(responseData)
        // this.router.navigate(["dashboard"])
      }
      //console.log(response)
      
    }, error=>{
      console.log(error)
      this.errorResponse = error.error.message
      if(this.errorResponse=="Requested user Not Found"){
        this.errorResponse = "Login Id not found. Please signup and try login."
      }
      
    })
  }
}

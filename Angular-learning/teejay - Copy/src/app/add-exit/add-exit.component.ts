import { Component, OnInit } from '@angular/core';
import { ActiveTrade } from 'src/model/ActiveTrade';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-add-exit',
  templateUrl: './add-exit.component.html',
  styleUrls: ['./add-exit.component.css']
})
export class AddExitComponent implements OnInit {
  activeTrade!: ActiveTrade 
  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this.activeTrade = this._data.getActiveTrade()
    console.log(this.activeTrade)
  }

}

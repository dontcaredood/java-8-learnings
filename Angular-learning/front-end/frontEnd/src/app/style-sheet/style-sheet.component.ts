import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-sheet',
  templateUrl: './style-sheet.component.html',
  styleUrls: ['./style-sheet.component.css']
})
export class StyleSheetComponent implements OnInit {

  constructor() { }
Data:any[]=[]
  ngOnInit(): void {
    for(let i=1;i<=10;i++){
      this.Data.push(i)
    }
  }

}

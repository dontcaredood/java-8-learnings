import { Component, OnInit } from '@angular/core';
import { model } from 'src/Model/model';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  modelList: model[] = []
  constructor() { }

  ngOnInit(): void {
    for(let i = 1; i<= 10; i++){
      let m = new model(i*100,(i*100)+(i*i))
      this.modelList.push(m)
    }
    
console.log(this.modelList)
  }

  
}

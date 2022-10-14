import { Component, OnInit } from '@angular/core';
import { Jobs } from 'src/model/Jobs';
import { HrmsService } from 'src/service/hrms.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private service: HrmsService) { }
  data:any = {}
  jobsList : Jobs[] = []
  ngOnInit(): void {
    this.service.showJobs().subscribe(response=>{
      this.data = response
      for(let i=0; i<this.data.length;i++){
          let jobObject = new Jobs(this.data[i])
          this.jobsList.push(jobObject)
      }
      console.log(this.jobsList)
    })
  }

}

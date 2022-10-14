import { Component, OnInit } from '@angular/core';
import { Department } from 'src/model/Department';
import { HrmsService } from 'src/service/hrms.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  data:any = {}
  departmentList : Department[] = []
  constructor(private service : HrmsService) { }

  ngOnInit(): void {

    this.service.showDepartments().subscribe(
      response=>{
        setTimeout(()=>{
          this.data = response
          for(let i = 0; i< this.data.length; i++){
            let d = new Department(this.data[i])
            this.departmentList.push(d)
          }
        },500)
        
      
    })
  }

}

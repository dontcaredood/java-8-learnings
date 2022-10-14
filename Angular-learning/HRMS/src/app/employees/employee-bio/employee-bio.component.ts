import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeFullDetails } from 'src/model/EmployeeFullDetails';
import { HrmsService } from 'src/service/hrms.service';

@Component({
  selector: 'app-employee-bio',
  templateUrl: './employee-bio.component.html',
  styleUrls: ['./employee-bio.component.css']
})
export class EmployeeBioComponent implements OnInit {
  empDetails : any = {}
  input : any
  constructor(private router:Router, private service: HrmsService, private activeRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((a:any)=>this.input = a.params.id);
    console.log(this.input)
    this.service.showEmployeesById(this.input).subscribe(response=>{
       this.empDetails = new EmployeeFullDetails(response)
       //console.log(this.empDetails)
       })
  }

}

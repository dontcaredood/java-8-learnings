import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeBasicDetails } from 'src/model/EmployeeBasicDetails';
import { EmployeeFullDetails } from 'src/model/EmployeeFullDetails';
import { HrmsService } from 'src/service/hrms.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private service:HrmsService, private router:Router) { }
  data:any = {}
  employeesList: EmployeeBasicDetails[] = []; 
  ngOnInit(): void {
   // console.log("In employees.ts")
    this.service.showEmployees().subscribe(response =>{
     // console.log(response)
      this.data = response
      //console.log(`Length${this.data.length}`)
      for(let i = 0; i< this.data.length;i++){
        //console.log(this.data[i])
         let empBasic = new EmployeeBasicDetails(this.data[i])
         //console.log(empBasic)
         this.employeesList.push(empBasic)
         
      }
    });
    //console.log("OBject:"+this.employeesList)
  }

  empDetails:any
  getFullDetails(id:any){
    //console.log(inData)
    this.router.navigate(["employeeBasic/employeeBio",id]);
    
    
  }
     
   
}

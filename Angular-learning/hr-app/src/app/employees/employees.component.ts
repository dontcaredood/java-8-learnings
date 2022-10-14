import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/models/Employees';
import { EmployeesBasic } from 'src/models/EmployeesBasic';
import { HrService } from 'src/services/hr.service';
navigatione
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private service:HrService) { }
  data:any = {}
  employeesList: EmployeesBasic[] = []; 
  ngOnInit(): void {
   // console.log("In employees.ts")
    this.service.showEmployees().subscribe(response =>{
     // console.log(response)
      this.data = response
      console.log(`Length${this.data.length}`)
      for(let i = 0; i< this.data.length;i++){
        //console.log(this.data[i])
         let empBasic = new EmployeesBasic(this.data[i])
         //console.log(empBasic)
         this.employeesList.push(empBasic)
         
      }
    });
    //console.log("OBject:"+this.employeesList)
  }

  empDetails:any
  getFullDetails(inData:any){
    //console.log(inData)
    // this.service.showCountries().subscribe(response=>{
    //   console.log(response)
    // })
    const navigationExtras
    this.service.showEmployeesById(inData).subscribe(response=>{
      this.empDetails = new Employees(response)
      console.log(this.empDetails)
      })
  }
     
   
}

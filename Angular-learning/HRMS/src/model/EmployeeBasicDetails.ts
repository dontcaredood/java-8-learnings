export class EmployeeBasicDetails{
    employeeId:number
    firstName:string
    lastName:string
    email:string

    constructor(params:any){
        this.employeeId = params[0]
        this.firstName = params[1]
        this.lastName = params[2]
        this.email = params[3]
       
    }
}
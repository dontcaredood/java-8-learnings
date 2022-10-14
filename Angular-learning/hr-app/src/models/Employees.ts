export class Employees{
    employeeId:number
    firstName:string
    lastName:string
    email:string
    phoneNumber:string
    hireDate:Date
    jobId:number
    salary:number
    managerId:number
    departmentid:number

    constructor(...params:any){
        this.employeeId = params[0].employee_id
        this.firstName = params[0].first_name
        this.lastName = params[0].last_name
        this.email = params[0].email
        this.phoneNumber = params[0].phone_number
        this.hireDate = params[0].hire_date
        this.jobId = params[0].job_id
        this.salary = params[0].salary
        this.managerId = params[0].manager_id
        this.departmentid = params[0].department_id
       
    }
}
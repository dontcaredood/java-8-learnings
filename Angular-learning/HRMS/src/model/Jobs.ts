export class Jobs{

    jobId:number
    jobTitle:string
    minSalary:number
    maxSalary:number
    constructor(...params:any){
        this.jobId = params[0].job_id
        this.jobTitle = params[0].job_title
        this.minSalary = params[0].min_salary
        this.maxSalary = params[0].max_salary
    }
}
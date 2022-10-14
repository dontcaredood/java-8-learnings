export class Department {

    departmentId: number
    departmentName: string
    locationId: number
    constructor(...params: any) {
        this.departmentId = params[0].department_id
        this.departmentName = params[0].department_name
        this.locationId = params[0].location_id
    }

}
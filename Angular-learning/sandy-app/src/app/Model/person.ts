export class Person{

    public personName:string;
    
    public age:number

    constructor(...params:any){
        this.personName = params[0].firstName+" "+params[0].lastName
        
        this.age = params[0].age
    }
}

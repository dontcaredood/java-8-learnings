export class Countries{
    countryId:string
    countryName:string
    regionId:number

    constructor(...params:any){
        this.countryId = params[0].country_id
        this.countryName = params[0].country_name
        this.regionId = params[0].region_id
    }
}
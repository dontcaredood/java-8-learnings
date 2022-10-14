import { LTP } from "./LTP"

export class ActiveTrade {

    tradeId : number
    securityName : string
    quantity : number
    avgPrice : number
    tradeCaptial : number
    remarks : string
    entryDate : string
    isActive : string
    ltp:number | undefined
    LTP!: LTP
    arrow!:string;
    
    constructor(...params: any) {
        this.tradeId = params[0].tradeId
        this.securityName = params[0].securityName
        this.quantity = params[0].quantity
        this.avgPrice = params[0].avgPrice
        this.tradeCaptial = params[0].tradeCaptial
        this.remarks = params[0].remarks
        this.entryDate = params[0].entryDate
        this.isActive = params[0].isActive
    }
}

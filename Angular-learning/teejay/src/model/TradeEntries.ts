export class TradeEntries {
    securityName!: string
    quantity!: number
    avgPrice!: number 
    remarks!: string
    userId!:number
    constructor(...params: any) {
        this.securityName = params[0].securityName
        this.quantity = params[0].quantity
        this.avgPrice = params[0].avgPrice        
        this.remarks = params[0].remarks
    }
}
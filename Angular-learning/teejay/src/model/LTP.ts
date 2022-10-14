export class LTP{
    ticker:string
    ltp:number
    pnl!:number
    pnlPercent!:number
    currentCap!:number
    change!:number
    constructor(...params:any){
        this.ticker  = params[0].ticker
        this.ltp = params[0].ltp
    }
}
export class StockData{

    tickerName:string
    ltp:number
    volume:number
    constructor(...params:any){
        this.tickerName = params[0]
        this.ltp = params[1]
        this.volume = params[2]
    }
}
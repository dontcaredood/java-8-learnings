export class TradeHistory {
    closeCap: number
    entryDate: string
    entryPrice: number
    entryReason: string
    exitDate: string
    exitPrice: number
    exitReason: string
    historyId: number
    initialCap: number
    netProfit: number
    pnl: string
    pnlPercent: number
    quantity: number
    security: string
    tradeDays: number
    tradeId: number
    userId: number

    constructor(...params: any) {
        this.closeCap = params[0].closeCap
        this.entryDate = params[0].entryDate
        this.entryPrice = params[0].entryPrice
        this.entryReason = params[0].entryReason
        this.exitDate = params[0].exitDate
        this.exitPrice = params[0].exitPrice
        this.exitReason = params[0].exitReason
        this.historyId = params[0].historyId
        this.initialCap = params[0].initialCap
        this.netProfit = params[0].netProfit
        this.pnl = params[0].pnl
        this.pnlPercent = params[0].pnlPercent
        this.quantity = params[0].quantity
        this.security = params[0].security
        this.tradeDays = params[0].tradeDays
        this.tradeId = params[0].tradeId
        this.userId = params[0].userId
    }
}
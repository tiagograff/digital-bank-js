import Operations from "../Operations.js"

export default class Deposit extends Operations {
    constructor(account, value){
        super()
        this.account = account
        this.value = value
    }
}
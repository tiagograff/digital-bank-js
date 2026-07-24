import User from "../users/User.js";

export default class Account extends User{
    #balance = null
    constructor(name, email, nro_account){
        super(name, email, nro_account)
        this.loans = []
        this.deposits = []
        this.transfers = []
    }
}
import User from "../users/User.js";

export default class Account extends User{
    #balance = null
    constructor(name, email, nroAccount){
        super(name, email, nroAccount)
        this.nroAccount = nroAccount
        this.loans = []
        this.deposits = []
        this.transfers = []
    }

    get showBalance(){
        console.log(this.#balance)
    }
}
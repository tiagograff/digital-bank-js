import User from "../users/User.js";
import dayjs from "dayjs";

export default class Account extends User{
    #balance = null
    constructor(name, email, nroAccount){
        super(name, email, nroAccount)
        this.nroAccount = nroAccount
        this.requestLoans = []
        this.loans = []
        this.deposits = []
        this.transfers = []
    }

    get showBalance(){
        return this.#balance
    }

    requestLoan(){
        const now = dayjs();
        this.requestLoans.push({
            currentBalance: this.showBalance,
            createdAt: now.format("DD/MM/YYYY HH:mm:ss"),
            status: 'Pendente'
        })
    }
}
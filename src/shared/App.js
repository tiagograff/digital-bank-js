import Loan from "../modules/accounts/Loan.js";
import Admin from "../modules/users/Admin.js";
import {generateNumericIdOperations} from "../utils/generateNumericId.js";
const accounts = []

class App{
    constructor(){
        this.admin = new Admin('Admin', 'admin@admin.com')
    }

    createNewLoan(requester, valueOfLoan, nroInstallment){
        const newId = generateNumericIdOperations()
        if (!this.validatedLoan(requester, newId)){
            const newLoan = new Loan(newId, valueOfLoan, nroInstallment)
            requester.loans.push(newLoan)
            return newLoan
        }else{
            throw new Error('ID duplicado tente novamente')
        }

    }

    findUserById(userId){
        return accounts.find(account => account.id === userId)
    }

    validatedLoan(requester, id){
        return requester.loans.some(loan => loan.id === id)
    }
}

export {App, accounts}
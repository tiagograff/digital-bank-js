import Loan from "../modules/operations/implementations/Loan.js";
import generateNumericId from "../utils/generateNumericId.js";
const loans = []

class App{
    constructor(){

    }
    createNewLoan(valueOfLoan, nroInstallment){
        const newId = generateNumericId()
        if (!this.#validatedNewObject(newId, 'loan')){
            const newLoan = new Loan(newId, valueOfLoan, nroInstallment)
            loans.push(newLoan)
            return newLoan
        }else{
            throw new Error('ID duplicado tente novamente')
        }

    }

    #validatedNewObject(id, list){
        if (list === 'loan'){
             return loans.some(loan => loan.id === id)
        } else{
            throw new Error('Operação não existe')
        }
    }
}

export {App, loans}
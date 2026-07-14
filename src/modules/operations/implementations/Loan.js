import Operations from "../Operations.js"
import Installment from "./Installment.js"

export default class Loan extends Operations {
    static #newInterest = null
    static #interestRate = 0.02

    constructor(value, nro_installment){
        super()
        this.value = value
        this.loanInstallments = new Installment(nro_installment, value)
    }

    static get interestRate() {
        return Loan.#interestRate
    }

    static get totalLoan(){
        return `Valor do empréstimo: ${this.value}
        Quantidade de parcelas: ${this.loanInstallments.number}`
    }

    static set interestRateNewValue(interest_new_porcentage){
        this.#newInterest = interest_new_porcentage / 100

    }

    static calculateTotalValueOfInstalmment(currentValue){
        let currentInterest = (this.#newInterest ?? this.#interestRate)
        return currentValue * (1 + currentInterest)
    }

}
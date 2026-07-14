import Operations from "../Operations.js";
import Loan from "./Loan.js"

export default class Installment extends Operations{
    constructor(number, currentValue){
        super()
        this.value = Loan.calculateTotalValueOfInstalmment(currentValue)
        this.number = this.numOfInstallments(number)
        this.status = 'Pendente'
    }

    numOfInstallments(number){
    if(typeof(number) !== ('number') || (number > 24 || number <= 1)){
        throw new Error('Número de parcelas inválido (aceito de 2 até 12 parcelas')
    } else{
        return number
    }
  }
}
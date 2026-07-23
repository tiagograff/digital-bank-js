import Operations from "../Operations.js";
import Installment from "./Installment.js";

export default class Loan extends Operations {
  static #newInterest = null;
  static #interestRate = 0.02;
  static totalValueLoan = null

  constructor(id, value, nro_installment) {
    super();
    this.id = id
    this.value = value;
    this.loanInstallments = new Installment(nro_installment, value);
    this.totalValueLoan = this.loanInstallments.number * this.loanInstallments.value
  }

  static get interestRate() {
    return Loan.#interestRate;
  }

  static set interestRateNewValue(interest_new_porcentage) {
    this.#newInterest = interest_new_porcentage / 100;
  }

  static calculateTotalValueOfInstalmment(currentValue) {
    let currentInterest = this.#newInterest ?? this.#interestRate;
    return currentValue * (1 + currentInterest);
  }

  payAnInstallment(valueToPay) {
    if (valueToPay !== this.loanInstallments.value) {
      throw new Error(
        `Este valor não condiz com o valor da parcela, que é de R$: ${this.value.toFixed(2)}`,
      );
    } else if (valueToPay === this.loanInstallments.value && this.loanInstallments.number != 0){
      this.totalValueLoan -= valueToPay
      this.loanInstallments.number--
      this.loanInstallments.checkStatus();
    }else if (valueToPay === this.loanInstallments.value && this.loanInstallments.number === 0 && this.loanInstallments.status === 'Pago'){
      throw new Error('Não há mais parcelas para pagar')
    }else{
      throw new Error('Erro inesperado')
    }
  }
}
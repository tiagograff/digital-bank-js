import Operations from "../Operations.js";
import Installment from "./Installment.js";

export default class Loan extends Operations {
  static #newInterest = null;
  static #interestRate = 0.02;
  static totalValueLoan = null;

  constructor(id, value, nro_installment) {
    super();
    this.id = id;
    this.value = value;
    this.loanInstallments = new Installment(nro_installment, value);
    const installment = this.loanInstallments;
    this.totalValueLoan = installment.number * installment.value;
  }

  static get interestRate() {
    return Loan.#interestRate;
  }

  //mostrar empréstimos
  get showLoanSummary() {
    if (!this.loanInstallments) {
      throw new Error("Sem registros de parcelas");
    } else {
      return console.log(
        `Sobre o Empréstimo:
- Valor pego: ${this.value}
- Juros: ${this.loanInstallments.interestRate}
- Quantidade de parcelas: ${this.loanInstallments.number}
- Valor por parcela: ${this.loanInstallments.value}
- Valor total para pagar: ${this.totalValueLoan}
`,
      );
    }
  }

  static set interestRateNewValue(interest_new_porcentage) {
    this.#newInterest = interest_new_porcentage / 100;
  }

  static calculateTotalValueOfInstalmment(currentValue) {
    const interestRate = this.#newInterest ?? this.#interestRate;
    const installmentValue = currentValue * (1 + interestRate);
    return {interestRate, installmentValue}
  }

  payAnInstallment(valueToPay) {
    if (valueToPay !== installment.value) {
      throw new Error(
        `Este valor não condiz com o valor da parcela, que é de R$: ${this.value.toFixed(2)}`,
      );
    } else if (valueToPay === installment.value && installment.number != 0) {
      this.totalValueLoan -= valueToPay;
      installment.number--;
      installment.checkStatus();
    } else if (
      valueToPay === installment.value &&
      installment.number === 0 &&
      installment.status === "Pago"
    ) {
      throw new Error("Não há mais parcelas para pagar");
    } else {
      throw new Error("Erro inesperado");
    }
  }
}

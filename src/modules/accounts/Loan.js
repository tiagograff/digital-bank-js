import Operations from "../operations/Operations.js";
import Installment from "./Installment.js";

export default class Loan extends Operations {
  static newInterest = null;
  static #interestRate = 0.02;
  static totalValueLoan = null;

  constructor(id, value, nro_installment) {
    super();
    this.id = id;
    this.value = value;
    this.loanInstallments = new Installment(nro_installment, value);
    this.totalValueLoan = this.loanInstallments.number * this.loanInstallments.value;
  }

  static get interestRate() {
    return Loan.#interestRate;
  }

  get summary() {
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

  static calculateTotalValueOfInstalmment(currentValue) {
    const interestRate = this.newInterest ?? this.#interestRate;
    const installmentValue = currentValue * (1 + interestRate);
    return {interestRate, installmentValue}
  }

  payAnInstallment(valueToPay) {
    if (valueToPay !== this.loanInstallments.value) {
      throw new Error(
        `Este valor é a baixo da parcela, que é de R$: ${this.value.toFixed(2)}`,
      );
    } else if (valueToPay === this.loanInstallments.value && this.loanInstallments.number != 0) {
      this.totalValueLoan -= valueToPay;
      this.loanInstallments.number--;
      this.loanInstallments.checkStatus();
      return true
    } else if (
      valueToPay === this.loanInstallments.value &&
      this.loanInstallments.number === 0 &&
      this.loanInstallments.status === "Pago"
    ) {
      throw new Error("Não há mais parcelas para pagar");
    } else {
      throw new Error("Erro inesperado");
    }
  }
}

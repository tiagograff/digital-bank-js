import Operations from "../Operations.js";
import Loan from "./Loan.js";

export default class Installment extends Operations {
  constructor(number, currentValue) {
    super();
    this.value = Loan.calculateTotalValueOfInstalmment(currentValue);
    this.currentNumber = 0;
    this.number = this.#numOfInstallments(number);
    this.status = "Pendente";
  }

  payAnInstallment(valueToPay) {
    if (valueToPay !== this.value) {
      throw new Error(
        `Este valor não condiz com o valor da parcela, que é de R$: ${this.value.toFixed(2)}`,
      );
    } else {
      valueToPay - this.value;
      this.currentNumber++;
      this.status = this.#checkStatus();
    }
  }

  #checkStatus() {
    this.status = this.currentNumber === this.number ? "Pago" : "Pendente";
  }

  #numOfInstallments(number) {
    if (typeof number !== "number" || number > 24 || number <= 1) {
      throw new Error(
        "Número de parcelas inválido (aceito de 2 até 24 parcelas)",
      );
    } else {
      return number;
    }
  }
}

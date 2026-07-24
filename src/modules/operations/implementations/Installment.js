import Operations from "../Operations.js";
import Loan from "./Loan.js";

export default class Installment extends Operations {
  constructor(number, currentValue) {
    super();
    const { interestRate, installmentValue } =
      Loan.calculateTotalValueOfInstalmment(currentValue);
    this.interestRate = interestRate;
    this.value = installmentValue;
    this.number = this.#validateNumOfInstallments(number);
    this.status = "Pendente";
  }

  checkStatus() {
    this.status = this.number === 0 ? "Pago" : "Pendente";
  }

  #validateNumOfInstallments(number) {
    if (typeof number !== "number" || number > 24 || number < 0) {
      throw new Error(
        "Número de parcelas inválido (aceito de 1 até 24 parcelas)",
      );
    } else {
      return number;
    }
  }
}

import dayjs from "dayjs";

export default class Operations {
  constructor() {
    const now = dayjs();
    this.createdAt = now.format("DD/MM/YYYY HH:mm:ss");
  }

  valueValidator(value) {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error("O valor de entrada deve ser um número 0000.00");
    } else if (value <= 0) {
      throw new Error("O valor da operação deve ser maior que zero (0)");
    } else {
      return value;
    }
  }

  userValidator(user) {
    if (typeof user !== "string") {
      throw new Error("O campo usuário deve ser string");
    } else {
      return user;
    }
  }

  //mostrar empréstimos
  get showLoanSummary() {
    if (!this.loanInstallments) {
      throw new Error("Sem registros de parcelas");
    } else {
      return `Sobre o Empréstimo:
  Valor inicial: ${this.value}
  Quantidade de parcelas: ${this.loanInstallments.number}
  Valor por parcela: ${this.loanInstallments.value}
  Valor total para pagar: ${this.loanInstallments.value * this.loanInstallments.number})`;
    }
  }
}

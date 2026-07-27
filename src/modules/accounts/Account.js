import { App } from "../../shared/App.js";
import User from "../users/User.js";
import dayjs from "dayjs";

export default class Account extends User {
  #balance = null;
  constructor(name, email, nroAccount) {
    super(name, email, nroAccount);
    this.nroAccount = nroAccount;
    this.requestLoans = [];
    this.loans = [];
    this.deposits = [];
    this.transfers = [];
  }

  get showBalance() {
    return this.#balance;
  }

  set #payWithBalance(value) {
    this.#balance -= value;
  }

  requestLoan() {
    const now = dayjs();
    this.requestLoans.push({
      currentBalance: this.showBalance,
      createdAt: now.format("DD/MM/YYYY HH:mm:ss"),
      status: "Pendente",
    });
  }

  payALoan(id) {
    const loan = App.findLoanById(this.nroAccount, id);
    if (!loan) {
      throw new Error("Empréstimo não encontrado");
    }

    const value = loan.loanInstallments.value

    if (this.#balance < value) {
      throw new Error("Saldo insuficiente para a operação");
    } else {
      if (loan.payAnInstallment(value)) {
        this.#payWithBalance = value;
      }
    }
  }

  payLastLoan() {
    const currentLoan = this.loans[this.loans.length - 1];

    if (!currentLoan) {
      throw new Error("Empréstimo não encontrado");
    }

    const value = currentLoan.loanInstallments.value;

    if (this.#balance < value) {
      throw new Error("Saldo insuficiente para a operação");
    } else {
      if (currentLoan.payAnInstallment(value)) {
        this.#payWithBalance = value;
      }
    }
  }
}

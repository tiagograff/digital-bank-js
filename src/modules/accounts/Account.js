import { App } from "../../shared/App.js";
import Deposit from "../operations/implementations/Deposit.js";
import User from "../users/User.js";
import dayjs from "dayjs";
import Loan from "./Loan.js";
import Transfer from "../operations/implementations/Transfer.js";

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
    return `Saldo bancário de ${this.name}: ${this.#balance}`;
  }

  #payWithBalance(value) {
    this.#balance -= value;
  }

  set deposit(value){
    const newDeposit = new Deposit(this.name, value)
    if(App.valueValidator(newDeposit.value)){
        this.#balance += value
        this.deposits.push(newDeposit)
    }
  }

  set #receivePayment(value){
    this.#balance += value
  }

  transfer(recipientUserEmail, value){
    const recipientUser = App.findUserByEmail(recipientUserEmail)
    const newTransfer = new Transfer(this.name, recipientUser.name, value)
    if (App.valueValidator(newTransfer.value)){
      this.#balance -= value
      recipientUser.#receivePayment = value
      this.transfers.push(newTransfer)
      recipientUser.transfers.push(newTransfer)
      console.log(`transferência de ${value} de ${this.name} para ${recipientUser.name} concluída`)
    }
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
        this.#payWithBalance(value)
      }
    }
  }

  payLastLoan() {
    const currentLoan = this.loans[this.loans.length - 1];
    if (this.loans.length <= 0) {
      throw new Error("Não há empréstimos");
    }

    const value = currentLoan.loanInstallments.value;

    if (this.#balance < value) {
      throw new Error("Saldo insuficiente para a operação");
    } else {
      if (currentLoan.payAnInstallment(value)) {
        this.#payWithBalance(value);
      }else{
        throw new Error('Erro inesperado')
      }
    }
  }

  loanSummary(loanId){
    const currentLoan = App.findLoanById(loanId)
    currentLoan.summary
  }

   get allLoansSummary(){
    this.loans.forEach(loan => {
      loan.summary
    })
  }
}

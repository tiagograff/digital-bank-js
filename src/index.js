import Loan from "./modules/accounts/Loan.js";
import {App, accounts} from "./shared/App.js";
import Deposit from './modules/operations/implementations/Deposit.js';

const bank = new App

const tiago = bank.admin.createAccount('tiago','email')
tiago.deposit = 600
bank.admin.interestRateNewValue = 50
tiago.requestLoan()
bank.admin.aprovateLoan(tiago, 'Aprovado')
bank.createNewLoan(tiago,100,2)
tiago.payLastLoan()
tiago.payLastLoan()
console.log(tiago.showBalance)
console.log(tiago.allLoansSummary)
console.log(tiago.showBalance)
console.log(tiago.deposits)

const outro = bank.admin.createAccount('outraPessoa', 'email')
outro.deposit = 200
outro.transfer(tiago, 150)
console.log(tiago.showBalance)
console.log(outro.showBalance)
console.log(outro.transfers)
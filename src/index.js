import Loan from "./modules/accounts/Loan.js";
import {App, accounts} from "./shared/App.js";

const bank = new App

const tiago = bank.admin.createAccount('tiago','email')
tiago.requestLoan()
bank.admin.aprovateLoan(tiago, 'Aprovado')
bank.admin.interestRateNewValue = 20
bank.createNewLoan(tiago, 200, 13)
tiago.requestLoan()
bank.admin.aprovateLoan(tiago, 'Reprovado')
bank.createNewLoan(tiago, 100, 12)
tiago.payLastLoan(240)
console.log(tiago)
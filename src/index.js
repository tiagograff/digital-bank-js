import Loan from "./modules/operations/implementations/Loan.js";
import {App} from "./shared/App.js";

const app = new App

const newLoan = app.createNewLoan(300, 2)
console.log(newLoan)
newLoan.payAnInstallment(306.00)
console.log(newLoan)
newLoan.payAnInstallment(306.00)
console.log(newLoan)
newLoan.payAnInstallment(306.00)
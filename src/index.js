import Loan from "./modules/accounts/Loan.js";
import {App, accounts} from "./shared/App.js";

const bank = new App

bank.admin.createAccount('tiago','email')
bank.createNewLoan(accounts[0],200,12)
console.log(accounts)
console.log(accounts[0].loans)
bank.admin.removeAccount('acc0')
console.log(accounts)
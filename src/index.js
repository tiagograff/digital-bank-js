import Loan from "./modules/accounts/Loan.js";
import {App, accounts} from "./shared/App.js";

const app = new App

app.admin.createAccount('tiago','email')
app.createNewLoan(accounts[0],200,12)
app.createNewLoan(accounts[0],220,15)
console.log(accounts)
console.log(accounts[0].loans)
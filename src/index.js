import Loan from "./modules/operations/implementations/Loan.js";
import {App} from "./shared/App.js";

const app = new App


Loan.interestRateNewValue = 5
const newLoan = app.createNewLoan(300, 2)

newLoan.showLoanSummary
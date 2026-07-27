import Loan from "../modules/accounts/Loan.js";
import Admin from "../modules/users/Admin.js";
import { generateNumericIdOperations } from "../utils/generateNumericId.js";
const accounts = [];

class App {
  constructor() {
    this.admin = new Admin("Admin", "admin@admin.com");
  }

  createNewLoan(requester, valueOfLoan, nroInstallment) {
    const newId = generateNumericIdOperations();
    if (!this.validatedLoan(requester, newId)) {
      const newLoan = new Loan(newId, valueOfLoan, nroInstallment);
      requester.loans.push(newLoan);
      return newLoan;
    } else {
      throw new Error("ID duplicado tente novamente");
    }
  }

  static findUserById(userId) {
    return accounts.find((account) => account.id === userId);
  }

  static hasAccount(id) {
    return accounts.some((account) => account.nroAccount === id);
  }

  static validatedLoan(requester, id) {
    return requester.loans.some((loan) => loan.id === id);
  }

  static valueValidator(value) {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error("O valor de entrada deve ser um número 0000.00");
    } else if (value <= 0) {
      throw new Error("O valor da operação deve ser maior que zero (0)");
    } else {
      return value;
    }
  }

  static userValidator(user) {
    if (typeof user !== "string") {
      throw new Error("O campo usuário deve ser string");
    } else {
      return user;
    }
  }
}

export { App, accounts };

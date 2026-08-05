import Loan from "../modules/accounts/Loan.js";
import Operations from "../modules/operations/Operations.js";
import Admin from "../modules/users/Admin.js";
import getUsers from "../services/user.service.js";
import { generateNumericIdOperations } from "../utils/generateNumericId.js";
const accounts = [];

class App {
  constructor() {
    this.admin = new Admin("Admin", "admin@admin.com");
  }

  createNewLoan(requester, valueOfLoan, nroInstallment) {
    if (App.lastRequest(requester).status === "Aprovado") {
      const newId = generateNumericIdOperations();
      if (!this.validatedLoan(requester, newId)) {
        const newLoan = new Loan(newId, valueOfLoan, nroInstallment);
        requester.loans.push(newLoan);

        console.log("Empréstimo aprovado");

        return newLoan;
      } else {
        throw new Error("ID duplicado tente novamente");
      }
    } else if (App.lastRequest(requester).status === "Reprovado") {
      console.log("Sua última requisição está reprovada!");
    } else {
      console.log("Erro/Pendência na última requisição");
    }
  }

  static findUserById(userId) {
    return accounts.find((account) => account.id === userId);
  }

  static  async findUserByEmail(userEmail) {
    const dataUsers = await getUsers()
    return dataUsers.find((user) => user.email === userEmail);
  }

  static validatedEmail(email) {
    if (accounts.includes((account) => account.email === email)) {
      throw new Error("Este email já está em uso");
    } else {
      return true;
    }
  }

  static hasAccount(id) {
    return accounts.some((account) => account.nroAccount === id);
  }

  static lastRequest(requester) {
    if (requester.requestLoans.length === 0) {
      throw new Error("Não há requisições de empréstimo nesta conta");
    } else {
      return requester.requestLoans[requester.requestLoans.length - 1];
    }
  }

  validatedLoan(requester, id) {
    return requester.loans.some((loan) => loan.id === id);
  }

  static findLoanById(user, loanId) {
    return user.loans.find((loan) => loan.id === loanId);
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
}

export { App, accounts };

import {generateNumericIdAccounts} from "../../utils/generateNumericId.js";
import Account from "../accounts/Account.js";
import User from "./User.js";
import { App, accounts } from "../../shared/App.js";

export default class Admin extends User{
    constructor(name, email){
        super(name, email)
        this.type = 'Admin'
    }

    createAccount(name, email){
        const newId = generateNumericIdAccounts()
        const newUser = new Account(name, email, newId)
        accounts.push(newUser)
    }
}
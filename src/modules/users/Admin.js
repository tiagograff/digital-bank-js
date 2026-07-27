import {generateNumericIdAccounts} from "../../utils/generateNumericId.js";
import Account from "../accounts/Account.js";
import User from "./User.js";
import { App, accounts} from "../../shared/App.js";

export default class Admin extends User{
    constructor(name, email){
        super(name, email)
        this.type = 'Admin'
    }

    createAccount(name, email){
        const newId = generateNumericIdAccounts()
        if (!App.hasAccount(newId)){
            const newUser = new Account(name, email, newId)
            accounts.push(newUser)
            console.log('Conta criada com sucesso!')
        }else{
            throw new Error('ID existente, tente novamente')
        }
    }

    removeAccount(id){
        if (App.hasAccount(id)){
            const accToRemove = App.findUserById(id)
            const index = accounts.indexOf(accToRemove)
            accounts.splice(index, 1)
            console.log('Conta deletada com sucesso!')
        }else{
            throw new Error('Essa conta não existe')
        }
    }
}
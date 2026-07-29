import { App } from "../../shared/App.js"

export default class User {
    constructor(name, email, nro_account){
        this.name = name,
        this.email = App.validatedEmail(email),
        this.type = 'Checking'
    }
}
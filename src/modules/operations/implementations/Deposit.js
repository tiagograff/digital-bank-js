import Operations from "../Operations.js"

class Deposit extends Operations {
    constructor(value){
        super()
        this.value = this.valueValidator(value)
    }
}

console.log(new Deposit(20))
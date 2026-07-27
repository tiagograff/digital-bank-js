import Operations from "../Operations.js"

class Deposit extends Operations {
    constructor(value){
        super()
        this.value = App.valueValidator(value)
    }
}
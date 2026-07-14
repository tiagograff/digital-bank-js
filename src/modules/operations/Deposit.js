import dayjs from "dayjs"

class Deposit {
    constructor(value){
        const now = dayjs()
        this.value = this.inputValidator(value)
        this.createdAt = now.format('DD/MM/YY HH:mm:ss')
    }

    inputValidator(value){
        if (typeof(value) !== 'number'){
            throw new Error('O valor de entrada deve ser um número 0.00')
        } else {
            return value.toFixed(2)
        }
    }

}
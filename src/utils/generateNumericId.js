import { customAlphabet } from "nanoid";

const numbers = '0123456789'

function generateNumericIdOperations(length = 10){
    return customAlphabet(numbers, length)()
}

function generateNumericIdAccounts(length = 5){
    return `acc`+customAlphabet(numbers, length)()
}

export {generateNumericIdOperations, generateNumericIdAccounts}
import { customAlphabet } from "nanoid";

const numbers = '0123456789'

function generateNumericIdOperations(length = 3){
    return `loan`+customAlphabet(numbers, length)()
}

function generateNumericIdAccounts(length = 4){
    return `acc`+customAlphabet(numbers, length)()
}

export {generateNumericIdOperations, generateNumericIdAccounts}
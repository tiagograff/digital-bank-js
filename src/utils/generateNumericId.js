import { customAlphabet } from "nanoid";

const numbers = '0123456789'
const length = 10

export default function generateNumericId(){
    return customAlphabet(numbers, length)()
}
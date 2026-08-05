import { App } from "../../shared/App.js"

const button = document.getElementById('submitLoginBtn')
const email = document.querySelector('#userEmail')
const password = document.querySelector('#userPassword')

button.addEventListener("click", async (ev) => {
    ev.preventDefault()
    const user = await App.findUserByEmail(email.value)
    if(!user){
        alert('Usuário não cadastrado')
    }else{
        if (user.password === password){
            alert('Dados corretos')
        }else{
            alert('Senha incorreta')
        }
    }
})
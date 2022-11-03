import {Login} from '../scripts/request.js'

async function loginForm(){
    
    const form = document.querySelector('.loginForm')
    
    const inputs = document.querySelectorAll('input')

    const loginButton = document.querySelector('#login') 

    const cadastro = document.querySelector('#cadastro')

    cadastro.addEventListener('click', (event) => {
        event.preventDefault()

        window.location.assign('/pages/cadastro/index.html')
    })

    loginButton.addEventListener('click', (event) => {
        event.preventDefault()

        let body = {
            'email': '',
            'password': ''
        }

        inputs.forEach(input => {
            if(input.name === "email"){
                body['email'] = input.value
            }else if(input.name === "senha"){
                body['password'] = input.value
            }
        })
        Login(body)
    })
}

export {loginForm}
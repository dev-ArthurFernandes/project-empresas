import {Login, register} from '../scripts/request.js'

function Form(){
    
    const inputs = document.querySelectorAll('input')

    const btn1 = document.querySelector('#form_btn1') 

    const bnt2 = document.getElementById('form_btn2')

    btn1.addEventListener('click', (event) => {
        event.preventDefault()

        if(btn1.innerHTML === 'Login'){

            let body = {
                'email': '',
                'password': ''
            }

            inputs.forEach(input => {
                body[input.id] = input.value
            })
            Login(body)
        }else if(btn1.innerHTML === 'Cadastre-se'){
            
            let body = {
                "username": "",
                "password": "",
                "email": "",
                "professional_level": ""
            }

            inputs.forEach(input => {
                body[input.id] = input.value
            })
            register(body)
        }
    })

    bnt2.addEventListener('click', (event) => {
        event.preventDefault()
        console.log(event.srcElement.id)
        if(event.srcElement.innerHTML === 'Cadastre-se'){
            window.location.assign('/pages/cadastro/index.html')
        }else{
            window.location.assign('/pages/home/index.html')
        }
    })
}

export {Form}
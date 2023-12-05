import { getUserDetails, listAllUsersInTheSameDepartments } from "../..../../src/scripts/request.js";
import mainMenu from './../..../../src/scripts/menu.js';



async function loadUserDashbord(){

    const token = JSON.parse(localStorage.getItem('@KenzieEmpresas:Token'))

    const users = await listAllUsersInTheSameDepartments(token)

    userContent(token)

    mainMenu()
}


async function userContent(token){
    
    const user = await getUserDetails(token)

    const nome = document.querySelector('#nome')
    nome.innerText = user.username

    const email = document.querySelector('#email')
    email.innerText = user.email

    const nivel = document.querySelector('#nivel')
    nivel.innerText = user.professional_level

    const kindofwork = document.querySelector('#kindofwork')
    kindofwork.innerText = user.kind_of_work
}
loadUserDashbord()
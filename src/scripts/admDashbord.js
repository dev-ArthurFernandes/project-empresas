import { getCompany, listAllCompanies, listAllDepartments, listAllUsers } from "./request.js"
import modal from './modal.js';

function createCard(element, companyName){
    
    const li = document.createElement('li')
    li.id = element.uuid
    li.classList = 'card'

    const h2 = document.createElement('h2')
    if(element.name){
        h2.innerHTML = element.name
    }else{
        h2.innerHTML = element.username
    }

    const p1 = document.createElement('p')
    
    if(element.description){
        p1.innerHTML = element.description
    }else{
        p1.innerHTML = element.professional_level
    }

    const p2 = document.createElement('p')
    if(companyName){
        p2.innerHTML = companyName
    }else{
        p2.innerHTML = 'No Company'
    }

    const span = document.createElement('span')

    const eye = document.createElement('img')
    eye.src = '../../src/img/olho.png'
    eye.alt = 'olho'

    eye.addEventListener('click', () => {
        modal(element.uuid, 'Contratar')
    })

    const blackPen = document.createElement('img')
    blackPen.src = '../../src/img/blackPen.png'
    blackPen.alt = 'Caneta preta'

    blackPen.addEventListener('click', () => {
        modal(element.uuid, 'departmentEdit')
    })

    const purplePen = document.createElement('img')
    purplePen.src = '../../src/img/purplePen.png'
    purplePen.alt = 'Caneta Roxa'

    purplePen.addEventListener('click', () => {
        modal(element.uuid, 'editarUser')
    })

    const trash = document.createElement("img")
    trash.src = '../../src/img/Trash.png'
    trash.alt = 'Trash'

    if(element.description){
        trash.addEventListener('click', () => {
            modal(element.uuid, 'deleteDepartment')
        })
    }else{
        trash.addEventListener('click', () => {
            modal(element.uuid, 'deleteUser')
        })
    }

    if(element.description){
        span.append(eye, blackPen, trash)
    }else{
        span.append(purplePen, trash)
    }

    li.append(h2,p1,p2,span)

    return li
}

async function renderDepartments(filter){   
    
    const token = JSON.parse(localStorage.getItem('@KenzieEmpresas:Token'))

    const list = document.querySelector('.list1')
    list.innerHTML = ''

    const departments = await listAllDepartments(token)

    departments.forEach(element => {
        if(!filter){
            const card = createCard(element, element.companies.name)

            list.append(card)
        }else if(element.companies.name === filter){
            const card = createCard(element, element.companies.name)

            list.append(card)
        }
    });
}

async function renderAllUsers(){

    const token = JSON.parse(localStorage.getItem('@KenzieEmpresas:Token'))

    const list = document.querySelector('.list2')
    list.innerHTML = ''

    const users = await listAllUsers(token)

    users.forEach(element => {
        const card = createCard(element)

        list.append(card)
    })

}

export {renderDepartments, renderAllUsers, createCard }
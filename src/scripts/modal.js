import { createCard, renderDepartments } from "./admDashbord.js"
import { dismiss, editEmployee, hire, listAllDepartments, listAllUsers } from "./request.js"

const token = JSON.parse(localStorage.getItem('@KenzieEmpresas:Token'))

async function modal(uuid,type){

    const body = document.querySelector('body')
    body.style.position = 'fixed'


    const departments = await listAllDepartments(token)

    const modalSection = document.createElement("section")
    modalSection.classList = 'modalSection'

    const modal = document.createElement('div')
    modal.classList = 'modal'

    const closeModal = document.createElement('img')
    closeModal.src = '/src/img/X.png'
    closeModal.alt = 'Close'
    closeModal.classList = 'closeModal'

    closeModal.addEventListener('click', () => {
        body.style.position = ''
        modalSection.remove()
    })

    const department = departments.filter((element) => element.uuid === uuid)

    
    if(type === 'Contratar'){
        const users = await listAllUsers(token)

        const section1 = document.createElement('section')
        section1.classList = 'section1'
        
        const h2 = document.createElement("h2")
        h2.innerText = department[0].name

        const allDiv = document.createElement('div')
        allDiv.classList = 'allDiv'

        const div1 = document.createElement('div')
        div1.classList = "div1"

        const p1 = document.createElement('p')
        p1.classList = 'description'
        p1.innerText = department[0].description

        const p2 = document.createElement('p')
        p2.classList = 'companyName'
        p2.innerText = department[0].companies.name

        const div2 = document.createElement('div')
        div2.classList = 'div2'

        const input = document.createElement('input')
        input.placeholder = 'Selecionar usuário'
        input.setAttribute('readonly', true)

        input.addEventListener('click', (event) => {
            if(dropDown.style.display === 'block'){
                dropDown.style.transform = "translateY(0px)"
                setTimeout(() => {
                    dropDown.style.display = 'none'
                    document.styleSheets[6].rules[10].style.transform = 'rotate(0deg)'
                },0)
            }else{
                dropDown.style.display = 'block'
                document.styleSheets[6].rules[10].style.transform = 'rotate(180deg)'
                setTimeout(() => {
                    dropDown.style.transform = "translateY(5px)"
                }, 0);
            }
        })


        const dropDown = document.createElement('div')
        dropDown.classList = 'dropDownUsers'

        const usersDisponible = users.filter(element => element.department_uuid !== uuid)

        usersDisponible.forEach(element => {
            const item = document.createElement('div')
            item.classList = 'item'
            item.id = element.uuid
            item.innerHTML = element.username

            item.addEventListener('click', () => {
                input.value = item.innerHTML
                input.id = element.uuid
                dropDown.style.transform = "translateY(0px)"
                setTimeout(() => {
                    dropDown.style.display = 'none'
                    document.styleSheets[6].rules[10].style.transform = 'rotate(0deg)'
                },0)
            })

            dropDown.append(item)
        })


        const contratar = document.createElement('button')
        contratar.innerText = 'Contratar'

        contratar.addEventListener('click', async () => {
            let body = {
                "user_uuid": `${input.id}`,
                "department_uuid": `${uuid}`
            }
            await hire(token, body)
            renderDepartmentUsers(department[0].companies.name, uuid)
        })

        const section2 = document.createElement('section')
        section2.classList = 'section2'

        const ol = document.createElement("ol")
        ol.classList = 'departmentUsersList'

        

        div1.append(p1,p2)
        div2.append(input, contratar, dropDown)
        allDiv.append(div1, div2)
        section1.append(h2,allDiv)
        section2.append(ol)
        modal.append(section1, section2, closeModal)
        modalSection.appendChild(modal)
        body.append(modalSection)

        renderDepartmentUsers(department[0].companies.name, uuid)
    }else if(type === 'editarUser'){

        const h2 = document.createElement('h2')
        h2.innerText = 'editar Usuário'

        const div1 = document.createElement('div')
        div1.id = 'input1'

        const input1 = document.createElement('input')
        input1.placeholder = 'Selecionar modalidade de trabalho'
        input1.name = "kind_of_work"
        input1.id = 'kind_of_work'
        input1.setAttribute('readonly', true)

        input1.addEventListener('click', () => {
            if(dropDown1.style.display === 'block'){
                dropDown1.style.display = 'none'
            }else{
                dropDown1.style.display = 'block'
            }
        })

        const dropDown1 = document.createElement('div')
        dropDown1.classList = 'dropDown'
        dropDown1.id = 'dropDown_kind_of_work'

        const kind_of_work = ['home office', 'hibrido', 'presencial']

        kind_of_work.forEach(element => {
            const item = document.createElement('div')
            item.innerHTML = element
            item.classList = "item"
            item.addEventListener('click', () => {
                input1.value = item.innerHTML
                dropDown1.style.display = 'none'
            })

            dropDown1.append(item)
        })
        
        const div2 = document.createElement('div')
        div2.id = 'input2'

        const input2 = document.createElement('input')
        input2.placeholder = 'Selecionar nível profissional'
        input2.name = 'professional_level'
        input2.id = 'professional_level'
        input2.setAttribute('readonly', true)

        input2.addEventListener('click', () => {
            if(dropDown2.style.display === 'block'){
                dropDown2.style.display = 'none'
            }else{
                dropDown2.style.display = 'block'
            }
        })

        const dropDown2 = document.createElement('div')
        dropDown2.classList = "dropDown"
        dropDown2.id = 'dropDown_professional_level'

        const professional_level = ['estágio', 'júnior', 'plenor', 'sênior']

        professional_level.forEach(element => {
            const item = document.createElement('div')
            item.innerHTML = element
            item.classList = "item"

            item.addEventListener('click', () => {
                input2.value = item.innerHTML
                dropDown2.style.display = 'none'
            })

            dropDown2.append(item)
        })

        const button = document.createElement('button')
        button.innerText = 'Editar'
        button.classList = 'editar'

        button.addEventListener('click', () => {
            let body = {
                'kind_of_work': input1.value,
                "professional_level": input2.value
            }
            editEmployee(uuid, body, token)
        })

        div1.append(input1)
        div2.append(input2)
        modal.append(h2, div1, div2, button, closeModal, dropDown1, dropDown2)
        modalSection.append(modal)
        body.append(modalSection)
    }
}

async function renderDepartmentUsers(departmentName, uuid) {
    
    const ol = document.querySelector('.departmentUsersList')

    ol.innerHTML = ''
    
    const users = await listAllUsers(token)
    
    const departmentUsers = users.filter(element => element.department_uuid === uuid)

    departmentUsers.forEach(element => {
        
        if(element.department_uuid === uuid){
            const card = document.createElement('li')

            card.classList = 'card2'
        
            const userName = document.createElement('h2')
            userName.innerText = element.username
        
            const p1 = document.createElement('p') 
            p1.innerText = element.professional_level
            
            const p2 = document.createElement('p')
            p2.innerText = departmentName
        
            const button = document.createElement('button')
            button.innerText = "Desligar"
            button.classList = 'desligar'
        
            button.addEventListener('click', async () => {
                await dismiss(token, element.uuid)
                renderDepartmentUsers(departmentName, uuid)
            })

            card.append(userName, p1, p2, button)
        
            ol.append(card)
        }
    })
}

export default modal
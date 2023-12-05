
import { renderDepartments, renderAllUsers } from '../..../../src/scripts/admDashbord.js';
import { company } from '../..../../src/scripts/dropDown.js';
import modal from '../..../../src/scripts/modal.js';
import { listAllDepartments } from '../..../../src/scripts/request.js';
import mainMenu from './../..../../src/scripts/menu.js';


function loadDashbord(){
    
    mainMenu()
    company()

    renderDepartments()
    renderAllUsers()

    const create = document.querySelector('.createDepartements')

    const eventoDeClick = () => {create.addEventListener('click', () => {
        modal(0,'createDepartment')
    })}

    eventoDeClick()
}

loadDashbord()
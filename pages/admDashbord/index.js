
import { renderDepartments, renderAllUsers } from '../../src/scripts/admDashbord.js';
import { company } from '../../src/scripts/dropDown.js';
import modal from '../../src/scripts/modal.js';
import { listAllDepartments } from '../../src/scripts/request.js';
import mainMenu from './../../src/scripts/menu.js';


function loadDashbord(){
    
    mainMenu()
    company()

    renderDepartments()
    renderAllUsers()
    modal('3b5e7b1e-5890-4410-96ab-1649460c8ccb', 'editarUser')
}

loadDashbord()
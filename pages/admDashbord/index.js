
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
    modal('e66f05d9-6093-4e32-9f70-4bcc213e53a5', 'departmentEdit')
}

loadDashbord()
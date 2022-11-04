
import { renderDepartments, renderAllUsers } from '../../src/scripts/admDashbord.js';
import { company } from '../../src/scripts/dropDown.js';
import { listAllDepartments } from '../../src/scripts/request.js';
import mainMenu from './../../src/scripts/menu.js';


function loadDashbord(){
    
    const token = JSON.parse(localStorage.getItem('@KenzieEmpresas:Token'))
    
    
    mainMenu()
    company()    

    renderDepartments(token)
    renderAllUsers(token)
}

loadDashbord()
import renderCompanies from './renderCompanies.js';

function filterCompanies(){
    
    const itens = document.querySelectorAll('.item')

    itens.forEach(item => {
        item.addEventListener('click', () => {
            renderCompanies(item.innerHTML)
        })
    })
}

export default filterCompanies
import { listAllCompanies } from "./request.js"

function createCompaniesCard(company){
    const {name, opening_hours, sectors} = company

    const {description} = sectors

    const li = document.createElement('li')
    li.classList = 'card'
    li.id = description

    const h2 = document.createElement('h2')
    h2.innerText = name

    const div = document.createElement('div')

    const p = document.createElement('p')
    p.innerText = opening_hours

    const span = document.createElement('span')
    span.innerHTML = description

    div.append(p, span)
    li.append(h2, div)

    return li
}

async function renderCompanies(filter){

    const list = document.querySelector('.companiesList')

    list.innerHTML = ''

    const companies = await listAllCompanies()

    companies.forEach(element => {
        const card = createCompaniesCard(element)
        if(!filter || filter === 'Todos'){
            list.append(card)
        }else if(card.id === filter ){
            list.append(card)
        }
    });
}

export default renderCompanies
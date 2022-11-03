function sector(c){
    const itens = document.querySelectorAll(".item")

    const dropDown = document.querySelector(".dropDown")

    const input = document.querySelector('#selectSector')

    const selectSectorDiv = document.querySelector('.selectSectorDiv')

    selectSectorDiv.addEventListener('click', () => {
        if(dropDown.style.display === 'block'){
            dropDown.style.display = 'none'
            setTimeout(() => {
                dropDown.style.transform = 'translate(0px, -10px)'
            })
        }else {
            dropDown.style.display = 'block'
            setTimeout(() => {
                dropDown.style.transform = 'translate(0px)'
            },0)
        }
    })

    itens.forEach(item => {
        item.addEventListener('click', () => {
            input.value = item.innerHTML
            dropDown.style.display = 'none'
            renderCompanies(item.innerHTML)
        })
    })
    
}

function nivel(){
    const itens = document.querySelectorAll(".item")

    const dropDown = document.querySelector(".selectOptions")

    const input = document.querySelector('#nivel')

    const select = document.querySelector('.select')

    select.addEventListener('click', () => {
        if(dropDown.style.display === 'block'){
            dropDown.style.display = 'none'
            setTimeout(() => {
                dropDown.style.transform = 'translate(0px, -10px)'
            })
        }else {
            dropDown.style.display = 'block'
            setTimeout(() => {
                dropDown.style.transform = 'translate(0px)'
            },0)
        }
    })

    itens.forEach(item => {
        item.addEventListener('click', () => {
            input.value = item.innerHTML
            dropDown.style.display = 'none'
        })
    })
    
}

function company(){
    const itens = document.querySelectorAll(".item")

    const dropDown = document.querySelector(".dropdown")

    const input = document.querySelector('#company')

    const select = document.querySelector('#selectCompany')

    select.addEventListener('click', () => {
        if(dropDown.style.display === 'block'){
            dropDown.style.display = 'none'
            document.styleSheets[7].rules[3].style.transform = 'rotate(0deg)'
            setTimeout(() => {
                dropDown.style.transform = 'translate(0)'
            },0)
        }else {
            dropDown.style.display = 'block'
            document.styleSheets[7].rules[3].style.transform = 'rotate(180deg)'
            setTimeout(() => {
                dropDown.style.transform = 'translate(0, 5px)'
            },0)
        }
    })

    itens.forEach(item => {
        item.addEventListener('click', () => {
            input.value = item.innerHTML
            dropDown.style.display = 'none'
        })
    })
    
}

export {sector, nivel, company}
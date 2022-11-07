function dropDown(c){
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
            // renderCompanies(item.innerHTML)
        })
    })
    
}

function nivel(){
    const itens = document.querySelectorAll(".item")

    const dropDown = document.querySelector(".selectOptions")

    const input = document.querySelector('#professional_level')

    const selectSectorDiv = document.querySelector('.select')

    const selectSectorAfter = document.styleSheets[6].cssRules[12]

    selectSectorDiv.addEventListener('click', () => {
        if(dropDown.style.display === 'block'){
            dropDown.style.display = 'none'
            selectSectorAfter.style.transform = "rotate(0deg)"
            setTimeout(() => {
                dropDown.style.transform = 'translate(0px, -10px)'
                
            })
        }else {
            dropDown.style.display = 'block'
            selectSectorAfter.style.transform = "rotate(180deg)"
            setTimeout(() => {
                dropDown.style.transform = 'translate(0px)'
            },0)
        }
    })

    itens.forEach(item => {
        item.addEventListener('click', () => {
            input.value = item.innerHTML
            dropDown.style.display = 'none'
            selectSectorAfter.style.transform = "rotate(0deg)"
        })
    })
    
}

export {dropDown, nivel}
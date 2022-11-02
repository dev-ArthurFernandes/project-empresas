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

export {dropDown}
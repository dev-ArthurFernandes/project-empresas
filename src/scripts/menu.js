function mainMenu(page){
    const menu_btn = document.querySelector(".Menu")

    const buttonsDiv = document.querySelector('.buttons')

    const btn_1 = document.querySelector('#btn_1')
    const btn_2 = document.querySelector('#btn_2')

    menu_btn.addEventListener('click', () => {
        menu_btn.classList.toggle('ativar')
        buttonsDiv.classList.toggle('showMenu')
    })
}

export default mainMenu
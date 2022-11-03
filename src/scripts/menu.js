function mainMenu(){
    const menu_btn = document.querySelector(".Menu")

    const buttonsDiv = document.querySelector('.buttons')

    const btn_1 = document.querySelector('#btn_1')
    const btn_2 = document.querySelector('#btn_2')

    menu_btn.addEventListener('click', () => {
        menu_btn.classList.toggle('ativar')
        buttonsDiv.classList.toggle('showMenu')
    })

    btn_1.addEventListener('click', () => {
        if(btn_1.innerHTML === 'Logout'){
            localStorage.clear()
            window.location.assign('/pages/home/index.html')
        }else{
            window.location.assign(`/pages/${btn_1.innerHTML.toLowerCase()}/index.html`)
        }
    })
    
    if(btn_2){
        btn_2.addEventListener('click', () => {
            window.location.assign(`/pages/${btn_2.innerHTML.toLowerCase()}/index.html`)
        })
    }
}

export default mainMenu
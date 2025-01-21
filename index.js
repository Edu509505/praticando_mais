let tema = document.getElementById('tema')

tema.addEventListener('click', () => {

    document.body.classList.toggle('escuro')
    tema.classList.toggle('escuro')
})
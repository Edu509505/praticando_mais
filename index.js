let tema = document.getElementById('tema')
const temaCorpo = document.getElementById('corpo')
let temaAtivo = true

tema.addEventListener('click', () => {

    document.body.classList.toggle('escuro')
    document.getElementById('tema').classList.toggle('escuro')
})
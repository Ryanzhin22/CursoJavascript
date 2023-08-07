const carro = document.querySelector('#carro')
const btn_esquerda = document.querySelector('#btn_esquerda')
const btn_direita = document.querySelector('#btn_direita')
const btn_parar = document.querySelector('#btn_parar')

const init = () => {
    carro.style.position = "relative"
    carro.style.left = "0px"
}

let anima = null

const move = (dir) =>{
    carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"
}

btn_esquerda.addEventListener('click', ()=>{
    clearInterval(anima)
    anima = setInterval(move,20,-1)
})

btn_direita.addEventListener('click', ()=>{
    clearInterval(anima)
    anima = setInterval(move,20,1)
})

btn_parar.addEventListener('click', ()=>{
    clearInterval(anima)
})

//window.onload = init
window.addEventListener('load', init)
const carro = document.querySelector('#carro')
const btn_rodar = document.querySelector('#btn_rodar')
const btn_parar = document.querySelector('#btn_parar')

let anima = null
let tamMax = null
let tamCarro = null
let dir = 0 

const init = () => {
    carro.style.position = "relative"
    carro.style.left = "0px"
    carro.style.width = "100px"
    carro.style.height = "40px"

    tamCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - tamCarro
}

const move = () =>{
    if(parseInt(carro.style.left) >= tamMax){
        dir = -1
    }else if (parseInt(carro.style.left) <= 0){
        dir = 1
    }
    carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"
    anima = setTimeout(move,20)
}

btn_parar.addEventListener('click', ()=>{
    clearTimeout(anima)
})

btn_rodar.addEventListener('click', ()=>{
    move()
})

//window.onload = init
window.addEventListener('load', init)

window.addEventListener('resize',()=>{
    tamMax = window.innerWidth - parseInt(carro.style.width)
})

window.addEventListener('keydown', (evt)=>{
    if(evt.code === "ArrowUp"){
        carro.style.width=parseInt(carro.style.width) + 10 + "px"
        carro.style.height=parseInt(carro.style.height) + 10 + "px"
    }
    if(evt.code === "ArrowDown"){
    carro.style.width=parseInt(carro.style.width) - 10 + "px"
    carro.style.height=parseInt(carro.style.height) - 10 + "px"
    }
    tamCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - tamCarro
})
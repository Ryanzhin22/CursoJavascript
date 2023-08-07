const q1 = document.querySelector("#q1")
const q2 = document.querySelector("#q2")
const posx = document.querySelector("#posx")
const posy = document.querySelector("#posy")
const largura = document.querySelector("#largura")
const altura = document.querySelector("#altura")

const info = (el) => {
    let DOMRect_q1 = el.getBoundingClientRect()
    posx.innerHTML = `Posição X: ${DOMRect_q1.x}`
    posy.innerHTML = `Posição Y: ${DOMRect_q1.y}`
    largura.innerHTML = `Largura: ${DOMRect_q1.width}`
    altura.innerHTML = `Altura: ${DOMRect_q1.height}`
} 

q1.addEventListener('click', (evt)=>{
    info(evt.target) // evt.target retorna o id do quadrado
})

q2.addEventListener('click', (evt)=>{
     info(evt.target)
})
const caixa = document.querySelector("#caixa")

const curso = 'JavaScript'
const canal = "CFB Cursos"
const frase = `Este é o curso de ${curso} do canal ${canal}`
//const frase = "Este é o curso de " + curso + " do canal " + canal

const carros = ['Corsa', "Fusca", "HondaSivic", "T-Cross"]
let ul = `<ul>`
carros.map((el)=>{
    ul += `<li>${el}</li>`
})
ul += `</ul>`

caixa.innerHTML = ul
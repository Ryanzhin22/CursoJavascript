const arr = document.querySelector('#array')
const btnVerificar = document.querySelector('#btnReduzir') 
const resultado = document.querySelector('#resultado')

const elementos_array = [1,2,3,4,5]
let ant = []
let atu = []
let dobro = []
arr.innerHTML = elementos_array

btnVerificar.addEventListener('click',()=>{
    dobro.push(elementos_array[0]*2)
    resultado.innerHTML = elementos_array.reduce((anterior, atual, posicao)=>{
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)
        return anterior + atual
    })
    resultado.innerHTML += '<br>Valor Anterior: '+ant+"<br>Valor Atual: "+atu+"<br>Dobro do Array: "+dobro
})

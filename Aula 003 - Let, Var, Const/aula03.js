"use strict"

if(true){
    let nome = "Ryan"
    if(true){
        console.log(nome)
    }
}

// Com o "let" você pode acessar escopos acima

if(true){
    var nome = "Caralho"
}

console.log(nome)
// A variável com "var" pode ser acessada através de qualquer escopo

function teste(){
    let outroNome = "Outro Nome"
    if(true){
        console.log("Dentro do IF do teste: " + outroNome)
    }
    console.log("Dentro do teste: " + outroNome)
}

teste()

// console.log("Fora do teste: " + outroNome) (Não é possível acessar a variável "outroNome" porque o console.log está fora da função)

const maisNome = "Javascript"

console.log(maisNome)
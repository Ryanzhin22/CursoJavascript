// 1º Dúvida

/*
let n1 = 1
let n2 = "1"

let v1 = {nome: "Burno"}
let v2 = {nome: "Burno"}

console.log(n1 == n2)
console.log(n1 === n2)

console.log(v1 == v2) // O espaço alocado na memória é diferente
console.log(v1 === v2) // O resultado só vai dar TRUE se let v2 = v1
*/

// 2º Dúvida

/*
let nome = prompt("Digite seu nome") // O nome que o usuário digitar vai ser armazenado na variável "nome"

console.log(nome)
*/

// 3º Dúvida

/*
let n1 = 1
let n2 = 2

console.log(!(n1 != n2)) // NOT inverte uma operação
*/

// 4º Dúvida

// Identifica por qual a plataforma o usuário está acessando o site

if(navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone|iPad|iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/IEMobile/i)
){
    console.log('Celular')
} else
    console.log('PC')

// 5º Dúvida


let nome = "Ryan"
let canal = "CFB Cursos"

console.log(nome)
console.log(typeof(nome))

for(let i = 0 ; i<4 ; i++){
    console.log(nome.charAt(i))
}

console.log(nome.charCodeAt(0)) // Mostra o código do caractere

console.log(nome.concat(canal)) // Não modifica a variavel "nome"
console.log(nome)

console.log(nome.indexOf("y")) // Procura a posição da primeira letra "y"
console.log(nome.lastIndexOf('n')) // Procura a posição da última letra "n"
let nome = "Ryan Barbosa"
let nome2 = "Ryan"

console.log(nome.localeCompare(nome2)) // 0 = Duas Strings Iguais, 1 = String comparada vem antes, -1 = String comparada vem depois

console.log(nome.replace("n","m")) // Substitui uma caractere por outra

console.log(nome.search("Barbosa")) // Retorna a primeira posição da procura

let sobrenome = nome.slice(5,12)
console.log(sobrenome) // Recorta uma String

let arr_nome = nome.split(" ") // Separa a String toda vez que encontrar um espaço
console.log(arr_nome)
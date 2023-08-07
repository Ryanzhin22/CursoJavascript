let nome = "Ryan Barbosa de Oliveira"

let parte1 = nome.substring(0,4)
console.log(parte1)

let parte2 = nome.substr(5,7) // Passar aonde começa + quantidade de caracteres 
console.log(parte2)

console.log(nome.toUpperCase()) // Muda somente na exibição 
console.log(nome.toLowerCase()) // Para mudar é necessário fazer: nome = nome.toLowerCase()

console.log(nome.valueOf()) // Retorna o valor primitivo (real)

let num = 10
console.log(typeof(num.toString()))
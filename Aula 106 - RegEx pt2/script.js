// Expressões Regulares

let nome = new String("Ryan Barbosa de Oliveira 2006")
let email = "ryannnnn@ryan.commmmm"
let numeros = "1, 10, 100, 1000"

console.log(nome.match(/[or]/ig)) // i = Case Sensitive, g = Geral, [or] = Pega todos os O e os R da String

console.log(nome.match(/[a-z|0-9]/ig)) // [a-z] = Pega todas letras entre A e Z, | = Também (retorna os número também)

// Metacaracteres
console.log(nome.match(/\d/ig)) // \d = Retorna Números
console.log(nome.match(/\s/ig)) // \s = Retorna Espaços
console.log(nome.match(/\br/ig)) // \b = DWORD

//Quantificadores
console.log(email.match(/n+|m+/ig)) // Letras juntas ficam em uma só palavra
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig)) 
console.log(numeros.match(/10?/ig)) // Retorna quando tiver 0 ou 1
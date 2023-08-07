// Expressões Regulares

let nome = new String("Ryan Barbosa de Oliveira")
console.log(nome)

console.log(nome.search(/barbosa/i)) // i = Case Sensitive

console.log(nome.match(/o/ig)) // g = Geral

console.log(nome.replace(/o/ig, "0"))
console.log(nome.replace(/a/ig, "4"))
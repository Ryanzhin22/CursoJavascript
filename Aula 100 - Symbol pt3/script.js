const nome = Symbol('nome')
const numero = Symbol('numero')
const corUniforme = Symbol('corUni')

const Jogador = {
    [nome]: "j1", // Virou oculto devido ao Symbol [Hide Properties]
    numero: 10
}

Jogador[corUniforme] = "Amarelo"

for(p in Jogador){
    console.log(p) // Pegando apenas o numero, pois não está "Escondido"
}

console.log(Jogador[nome])
console.log(Jogador.numero)
console.log(Jogador[corUniforme])
class Jogador{
    constructor(nome){
        this.nome = nome
        this.id = Symbol()
    }
}

let jogadores = [new Jogador("J1"), new Jogador("J2"), new Jogador("J3"), new Jogador("J4"), new Jogador("J2"), new Jogador("J3")]

let jogadoresSemJ2 = []

let s = []

let s_jogadores = jogadores.filter((j)=>{
    return j.nome == "J2"
})

s = s_jogadores.map((j)=>{
    return j.id
})

jogadoresSemJ2 = jogadores.filter((j)=>{
    return j.nome != "J2"
})

console.log(jogadores)
console.log(jogadoresSemJ2)
console.log(s_jogadores)
console.log(s)
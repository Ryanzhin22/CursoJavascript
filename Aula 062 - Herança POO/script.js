class Carro{ // Classe PAI
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.cor = undefined
        this.ligado = false
        this.velocidade = 0
    }
    ligar=function(){
        this.ligado = true
    }
    desligar=function(){
        this.ligado = false
    }
    setCor=function(cor){
        this.cor = cor
    }
}

class Militar extends Carro{ // Class FILHO
    constructor(nome,portas,blidagem,municao){
        super(nome,portas)
        this.blidagem = blidagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }
}

const c1 = new Carro("Normal",4)
c1.ligar()
c1.setCor("Preto")

const c2 = new Militar("Tank",1,100,50)
c2.setCor("Azul")
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Velocidade: ${c1.velocidade}`)
console.log(`Cor: ${c1.cor}`)
console.log(`Ligado: ${(c1.ligado?"Sim":"Não ")}`)

console.log("-----------------")

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Velocidade: ${c2.velocidade}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Blindagem: ${c2.blidagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Ligado: ${(c2.ligado?"Sim":"Não ")}`)
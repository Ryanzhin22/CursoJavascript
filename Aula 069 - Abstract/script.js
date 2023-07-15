class CarroPadrao{
    constructor(){
        // CLASSES ABSTRATAS
        if(this.constructor===CarroPadrao){
            throw new TypeError("Essa classe não pode ser instanciada")
        }
        if(this.ligar===undefined){
            throw new TypeError("É obrigatório o uso do método LIGAR")
        }
        if(this.desligar===undefined){
            throw new TypeError("É obrigatório o uso do método DESLIGAR")
        }
        this.rodas = 4 
        this.portas = 4
        this.ligado = false
    }
}

class Carro extends CarroPadrao{
    constructor(tipo, estagioTurbo){
        super()
        this.turbo = new Turbo(estagioTurbo)
        if(tipo == 1){
            this.velMax = 120
            this.nome = "normal"
        } else if (tipo == 2){
            this.velMax = 160
            this.nome = "esportivo"
        } else if (tipo == 3){
            this.velMax = 200
            this.nome = "super esportivo"
        }
        this.velMax += this.turbo.pot
    }
    info(){
        console.log(this.nome)
        console.log(this.turbo)
        console.log(this.velMax)
        console.log(this.portas)
        console.log(this.rodas)
        console.log(this.ligado)
        console.log("-------------")
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
}

class Turbo{
    constructor(e){
        if(e==0){
            this.pot = 0
        }else if (e==1){
            this.pot = 50
        }else if (e==2){
            this.pot = 75
        }else if (e==3){
            this.pot = 100
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4,estagioTurbo)
        this.tipoInfo = 1
        this.nome = "Carro Especial"
        this.velMax = 300 + this.turbo.pot
    }
    info(){
        if(this.tipoInfo == 1){
            super.info()
        }else{
            console.log(`Nome: ${this.nome}`)
            console.log(`Vel.Max: ${this.velMax}`)
            console.log(`Turbo: ${this.turbo}`)
        }
    }
}

const c1 = new Carro(1,0)
const c2 = new Carro(1,1)
const c3 = new CarroEspecial(3)

c1.info()
c2.info()
c3.info()
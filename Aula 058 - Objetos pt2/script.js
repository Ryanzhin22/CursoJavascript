class Carro{
    canal = "Ryanzhin22"
    constructor(p_nome,p_tipo){
        this.nome = p_nome
        if(p_tipo == 1){
            this.tipo = "Exportivo"
            this.vmaxima = 300
            this.canal = "Youtube"
        }else if(p_tipo == 2){
            this.tipo = "Utilitário"
            this.vmaxima = 100
        }else if(p_tipo == 3){
            this.tipo = "Passeio"
            this.vmaxima = 160
        }else{
            this.tipo = "Militar"
            this.vmaxima = 180
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.vmaxima
    }
    getInfo(){
        return [this.nome,this.tipo,this.vmaxima]
    }
    setNome(nome){
        this.nome = nome
    }
    setTipo(tipo){
        this.tipo = tipo
    }
    setVelMax(vmaxima){
        this.vmaxima = vmaxima
    }
    info(){
        console.log(`Canal: ${this.canal}`)
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade Máxima: ${this.vmaxima}`)
    }
}
let c1 = new Carro("Rapidão", 1)
let c2 = new Carro("Super Luxo", 3)
let c3 = new Carro("Bombadão", 4)
let c4 = new Carro("Carrego Tudo", 2)

//console.log(c1.getInfo())
c1.setNome("Super Veloz")
c1.setVelMax(500)
c1.info()
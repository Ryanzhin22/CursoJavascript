const Nave = function(energia){
    this.energia = energia
    this.disparos = 100
}

const n1 = new Nave(100)
Nave.prototype.vidas = 3
Nave.prototype.disparar=function(){
    if(this.disparos > 0){
        this.disparos--
    }
}

console.log(Nave)
console.log(n1)
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
console.log(n1.disparos)
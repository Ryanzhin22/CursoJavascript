class Npc{
    static alerta // STATIC PERTENCE A CLASSE
    constructor(energia){
        this.energia = energia
    }
    info=function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${Npc.alerta?"Sim":"Não"}`)
    }
    static alertar = function(){
        Npc.alerta = true
    } 
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

Npc.alertar() 
//npc1.alertar // Não será possível fazer isso pois ALERTAR pertence ao NPC


npc1.info()
npc2.info()
npc3.info()
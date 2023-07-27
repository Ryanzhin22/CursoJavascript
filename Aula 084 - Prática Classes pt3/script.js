const palco = document.querySelector("#palco")
const num_objetos = document.querySelector("#num_objetos")
const txt_qtde = document.querySelector("#txt_qtde")
const btn_add = document.querySelector("#btn_add")
const btn_remover = document.querySelector("#btn_remover")

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBola = 0

class Bola{
    constructor(arrayBolas,palco){
        this.tam = Math.floor((Math.random()*15)+10)
        this.r = Math.floor(Math.random()*225)
        this.g = Math.floor(Math.random()*225)
        this.b = Math.floor(Math.random()*225)
        this.px = Math.floor(Math.random()*(larguraPalco - this.tam))
        this.py = Math.floor(Math.random()*(alturaPalco - this.tam))
        this.velx = Math.floor(Math.random()*2)+0.5
        this.vely = Math.floor(Math.random()*2)+0.5
        this.dirx = (Math.random()*10) > 5 ? 1 : -1
        this.diry = (Math.random()*10) > 5 ? 1 : -1
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now()+"_"+Math.floor(Math.random()*100000000000000)
        this.desenhar()
        this.controle = setInterval(this.controlar,10)
        this.eu = document.getElementById(this.id)
    }
    minhaPos=()=>{

    }

    remover=()=>{

    }

    desenhar=()=>{

    }

    controlar=()=>{

    }
}

window.addEventListener('resize', (evt)=>{
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
})

btn_add.addEventListener('click',(evt)=>{
    const qtde = txt_qtde.value
    for(let i = 0 ; i<qtde ; i++){
        //Instanciar novas Bolinhas
    }
})

btn_remover.addEventListener('click',(evt)=>{
    bolas.map((b)=>{
        //Remover as Bolinhas
    })
})
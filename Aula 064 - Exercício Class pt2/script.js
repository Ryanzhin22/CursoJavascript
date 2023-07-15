const f_tipoMilitar = document.querySelector('#f_tipoMilitar')
const f_tipoNormal = document.querySelector('#f_tipoNormal')
const f_blidagem = document.querySelector("#f_blidagem")
const f_municao = document.querySelector("#f_municao")
const carros = document.querySelector('.carros')
const btn_addCarro = document.querySelector('#btn_addCarro')
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector('#f_portas')

let arr_carros = []

f_tipoMilitar.addEventListener('click',()=>{
    f_municao.removeAttribute('disabled')
    f_blidagem.removeAttribute('disabled')
})
f_tipoNormal.addEventListener('click',()=>{
    f_municao.setAttribute('disabled', 'disabled')
    f_blidagem.setAttribute('disabled', 'disabled')
    f_blidagem.value = 0
    f_municao.value = 0 
})

const gerenciarCarros = () => {
    carros.innerHTML = ""
    arr_carros.map((c)=>{
        const div = document.createElement('div')
        div.setAttribute('class', 'carro')
        div.innerHTML = `Nome: ${c.nome}<br> Portas: ${c.portas}`
        carros.appendChild(div)
    })
}

const resetCampos = () => {
    f_nome.value = ""
    f_portas.value = ""
    f_blidagem.value = ""
    f_municao.value = ""
}

btn_addCarro.addEventListener('click', ()=>{
    if(f_tipoNormal.checked){
        const c = new Carro(f_nome.value, f_portas.value)
        arr_carros.push(c)
        resetCampos()
        f_nome.focus()
    }else{
        const c = new Militar(f_nome.value, f_portas.value, f_blidagem.value, f_municao.value)
        arr_carros.push(c)
        resetCampos()
        f_nome.focus()
    }
    gerenciarCarros()
})

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
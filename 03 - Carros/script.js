const f_tipoMilitar = document.querySelector('#f_tipoMilitar')
const f_tipoNormal = document.querySelector('#f_tipoNormal')
const f_blindagem = document.querySelector('#f_blindagem')
const f_municao = document.querySelector('#f_municao')
const f_nome = document.querySelector('#f_nome')
const f_portas = document.querySelector('#f_portas')
const carros = document.querySelector('.carros')
const btn_addCarro = document.querySelector('#btn_addCarro')

f_tipoMilitar.addEventListener('click', ()=>{
    f_blindagem.removeAttribute('disabled')
    f_municao.removeAttribute('disabled')
})
f_tipoNormal.addEventListener('click', ()=>{
    f_blindagem.setAttribute('disabled', 'disabled')
    f_municao.setAttribute('disabled', 'disabled')
})

const resetarCampo = () => {
    f_blindagem.value = ""
    f_municao.value = ""
    f_nome.value = ""
    f_portas.value = ""
}

let arr_carros = []

const removerCarro = (quem) => {
    arr_carros = arr_carros.filter((el)=>{
        return el.nome != quem
    })
}

const adicionarCarros = () => {
    carros.innerHTML = ""
    arr_carros.map((el)=>{
        const btn = document.createElement('button')
        btn.innerHTML = "Remover"
        btn.addEventListener('click', (evt)=>{
            const queCarro = evt.target.parentNode.dataset.nome
            removerCarro(queCarro)
            adicionarCarros()
        })
        const div = document.createElement('div')
        div.setAttribute('class', 'carro')
        div.setAttribute('data-nome', el.nome)
        div.innerHTML = `Nome: ${el.nome}<br> Portas: ${el.portas}<br> Blindagem: ${el.blindagem}<br> Munição: ${el.municao}`
        div.appendChild(btn)
        carros.appendChild(div)
    })
}

btn_addCarro.addEventListener('click', ()=>{
    if(f_tipoNormal.checked){
        const c1 = new Carro (f_nome.value, f_portas.value)
        arr_carros.push(c1)
        adicionarCarros()
        resetarCampo()
        f_nome.focus()
    } else{
        const c1 = new Militar (f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        arr_carros.push(c1)
        adicionarCarros()
        resetarCampo()
        f_nome.focus()
    }
})

class Carro{
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.cor = undefined
        this.ligado = false
        this.velocidade = 0
    }
} 

class Militar extends Carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
    }
}
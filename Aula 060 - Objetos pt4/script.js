function Pessoa(p_nome,p_idade){
    this.nome = p_nome,
    this.idade = p_idade,

    this.getNome=function(){
        return this.nome
    },
    this.getIdade=function(){
        return this.idade
    },
    this.setNome=function(nome){
        this.nome = nome
    },
    this.setIdade=function(idade){
        this.idade = idade
    },
    this.info=function(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
    }
}

let pessoas = []

const btnAdd = document.querySelector("#btn_add")
const res = document.querySelector('.res')

const addPessoa = () => {
    res.innerHTML = ""
    pessoas.map((p)=>{
        const div = document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `Nome: ${p.getNome()}<br>Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

btnAdd.addEventListener('click', (evt)=>{
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    console.log(pessoas)
    addPessoa()
})
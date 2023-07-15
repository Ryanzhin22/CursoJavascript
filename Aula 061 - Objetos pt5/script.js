const Pessoa = {
    nome:"",
    idade:0,
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(nome){
        this.nome = nome
    },
    setIdade:function(idade){
        this.idade = idade
    }
}

const btnAdd = document.querySelector('#btn_add')
const nome = document.querySelector("#f_nome")
const idade = document.querySelector("#f_idade")

const addPessoa = () => {
    const res = document.querySelector(".res")
    const div = document.createElement('div')
    div.setAttribute('class', 'pessoa')
    div.innerHTML = `Nome: ${Pessoa.nome}, Idade: ${Pessoa.idade}`
    res.appendChild(div)
}

btnAdd.addEventListener("click", ()=>{
    Pessoa.setNome(nome.value)
    Pessoa.setIdade(idade.value) 
    addPessoa()
    nome.value = ""
    idade.value = ""
    nome.focus()
})
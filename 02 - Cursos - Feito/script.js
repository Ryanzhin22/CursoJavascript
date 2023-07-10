const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL"]
const caixa2 = document.querySelector('#caixa2')
const btnSelecionado = document.querySelector('#btnSelecionado')
const btnRemover = document.querySelector('#btnRemover')
const btnAntes = document.querySelector('#btnAntes')
const btnDepois = document.querySelector('#btnDepois')
const caixaTexto = document.querySelector('#texto')

const tirarSelecionado = () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el) => {
        el.classList.remove('selecionado')
    })
}

let indice = 0
const criarCurso = (nome) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.setAttribute('id', "c" + (indice + 1))
    novoElemento.innerHTML = nome
    novoElemento.addEventListener('click', (evt) => {
        tirarSelecionado()
        evt.target.classList.toggle('selecionado')
    })
    return novoElemento
}

cursos.map((el) => {
    const novoElemento = criarCurso(el)
    caixa2.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = () => {
    const cursoSelecionado = document.querySelectorAll('.selecionado')[0]
    return cursoSelecionado
}

btnSelecionado.addEventListener('click', () => {
    const curso = cursoSelecionado() 
    if(curso == undefined){
        alert('Selecione um curso')
    }else{
        alert('Curso selecionado: ' + curso.textContent)
    }
    console.log(curso)
})

btnRemover.addEventListener('click', () => {
    try{
        const curso = cursoSelecionado()
        curso.remove()
    }catch(ex){
        alert('Selecione um curso')
    }
})

btnAntes.addEventListener('click',()=>{
    if(cursoSelecionado() == undefined){
        alert('Selecione um curso')
    }else{
        if(caixaTexto.value == ""){
            alert('Escreva o curso que deseja adicionar!')
        }else{
            const novoCurso = criarCurso(caixaTexto.value)
            const curso = cursoSelecionado()
            caixa2.insertBefore(novoCurso,curso)
        }
    }
})

btnDepois.addEventListener('click', ()=>{
    if(cursoSelecionado() == undefined){
        alert('Selecione um curso')
    }else{
        if(caixaTexto.value == ""){
            alert('Escreva o curso que deseja adicionar!')
        } else{
            const novoCurso = criarCurso(caixaTexto.value)
            const curso = cursoSelecionado()
            caixa2.insertBefore(novoCurso,curso.nextSibling)
        }
    }
})
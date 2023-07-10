const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btnSelecionado = document.querySelector('#btnSelecionado')
const btnRemover = document.querySelector('#btnRemover')
const caixaTexto = document.querySelector('#texto')
const btnAntes = document.querySelector('#btnAntes')
const btnDepois = document.querySelector('#btnDepois')

const tirarSelecao = () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el)=>{
        el.classList.remove('selecionado')
    })
}

let indice = 0
const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement('div')
    novoElemento.innerHTML = curso
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.setAttribute('id', "c"+(indice+1))
    novoElemento.addEventListener('click', (evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
/*
    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
*/
    return novoElemento
}

cursos.map((el)=>{
    const novoElemento = criarNovoCurso(el)
    caixa2.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]
}

btnSelecionado.addEventListener('click', ()=>{
    try{
        alert('Curso selecionado: ' + cursoSelecionado().innerHTML)
    }catch(ex){
        alert("Nenhum curso selecionado")
    }
})

btnRemover.addEventListener('click', ()=>{
    if(cursoSelecionado() === undefined){
        alert("Nenhum curso selecionado")
    } else{
        cursoSelecionado().remove()
    }
})

btnAntes.addEventListener('click', ()=>{
    try{
        if(caixaTexto.value != ""){
            const novoCurso = criarNovoCurso(caixaTexto.value)
            caixa2.insertBefore(novoCurso,cursoSelecionado())
        }else{
            alert('Digite o nome do curso')
        }
    }catch(ex){
        alert("Nenhum curso selecionado")
    }
})

btnDepois.addEventListener('click', ()=>{
    try{
        if(caixaTexto.value != ""){
            const novoCurso = criarNovoCurso(caixaTexto.value)
            caixa2.insertBefore(novoCurso,cursoSelecionado().nextSibling)
        }else{
            alert("Digite o nome do curso")
        }
    }catch(ex){
        alert("Nenhum curso selecionado")
    }
})
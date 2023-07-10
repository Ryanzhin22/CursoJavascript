const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btnSelecionado = document.querySelector('#btnSelecionado')
const btnRemover = document.querySelector('#btnRemover')
const caixaTexto = document.querySelector('#texto')
console.log(btnRemover)

cursos.map((el,i)=>{
    const novoElemento = document.createElement('div')
    novoElemento.innerHTML = el
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.setAttribute('id', "c"+(i+1))

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    caixa2.appendChild(novoElemento)
})

const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    const radioSelecionado = todosRadios.filter((el)=>{
        return el.checked
    })
    return radioSelecionado[0]
}

btnSelecionado.addEventListener('click', ()=>{
    const rs=radioSelecionado()
    try{
        const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent
        alert('Curso selecionado: ' + cursoSelecionado)
    }catch(ex){
        alert("Nenhum curso selecionado")
    }
})

btnRemover.addEventListener('click', ()=>{
    const rs=radioSelecionado()
    if(rs === undefined){
        alert("Nenhum curso selecionado")
    } else{
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    }
})
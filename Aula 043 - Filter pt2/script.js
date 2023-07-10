const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btnSelecionado = document.querySelector('#btnSelecionado')
const caixaTexto = document.querySelector('#texto')

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

btnSelecionado.addEventListener('click', ()=>{
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    let radioSelecionado = todosRadios.filter((el)=>{
        return el.checked
    })
    radioSelecionado = radioSelecionado[0]
    const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent
    alert('Curso selecionado: ' + cursoSelecionado)
})
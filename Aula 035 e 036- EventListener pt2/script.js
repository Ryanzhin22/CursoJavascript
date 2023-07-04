const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const botao = document.querySelector('#botao')
const todos = [...document.querySelectorAll(".curso")]

todos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        const curso = evt.target
        curso.classList.toggle('destaque')
    })
})

botao.addEventListener('click', ()=>{
    const cursosSelecionado = [...document.querySelectorAll('.destaque')]
    const cursosNaoSelecionado = [...document.querySelectorAll('.curso:not(.destaque)')]

    cursosSelecionado.map((el)=>{
        caixa2.appendChild(el)
    })

    cursosNaoSelecionado.map((el)=>{
        caixa1.appendChild(el)
    })
})
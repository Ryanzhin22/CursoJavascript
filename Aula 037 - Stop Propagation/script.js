const caixa1 = document.querySelector('#caixa1')
const c1 = document.querySelector('#c1')
const todosCursos = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click', (evt)=>{
    console.log(evt.target)
})

todosCursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        evt.stopPropagation()
    })
})

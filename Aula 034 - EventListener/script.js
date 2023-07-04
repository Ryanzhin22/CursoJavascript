const c1 = document.querySelector('#c1')
const todosCursos = [...document.querySelectorAll('.curso')]

todosCursos.map((el)=>{
    el.addEventListener("click",(evento)=>{
        const elemento = evento.target
        elemento.classList.add('destaque')
        console.log(el.id + ' foi clicado')
        console.log(el.innerHTML)
    })
})

const msg = () => {
    alert('clicou')
}

c1.addEventListener("click", (evt)=>{
    const el = evt.target
    el.classList.add('destaque')
    msg()
})

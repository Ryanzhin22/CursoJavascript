const caixa1 = document.querySelector('#caixa1')
const novoElemento = document.createElement("div")
const cursos = ['HTML', "CSS", "Javascript", "PHP", "MySQL", "React", 'React Native']

cursos.map((el, i)=>{
    const novoElemento = document.createElement("div")
    novoElemento.innerHTML = el
    novoElemento.setAttribute('id', "c"+(i+1))
    novoElemento.setAttribute('class', 'curso c1')
    caixa1.appendChild(novoElemento)
})
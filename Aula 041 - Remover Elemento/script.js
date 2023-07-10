const caixa1 = document.querySelector('#caixa1')
const cursos = ['HTML', "CSS", "Javascript", "PHP", "MySQL", "React", 'React Native']

cursos.map((el, i)=>{
    const novoElemento = document.createElement("div")
    novoElemento.innerHTML = el
    novoElemento.setAttribute('id', "c"+(i+1))
    novoElemento.setAttribute('class', 'curso c1')

    const lixeira = document.createElement('img')
    lixeira.setAttribute('src', 'lixeira.png')
    lixeira.setAttribute('class', 'lixeira')
    novoElemento.appendChild(lixeira)

    lixeira.addEventListener('click',(evt)=>{
        caixa1.removeChild(evt.target.parentNode)
        console.log(evt.target.parentNode)
    })

    caixa1.appendChild(novoElemento) 

})
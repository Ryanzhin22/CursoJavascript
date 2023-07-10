const cores=['azul','vermelho','verde',['ESCURO','CLARO','MEDIO']]
const cursos=['HTML', 'CSS', 'JavaScript',cores]

/*
cursos[0] = 'C++'
cursos.unshift('Python') // COLOCA NO COMEÇO DO ARRAY
cursos.unshift('COCO')
cursos.shift() // TIRA DO COMEÇO DO ARRAY
cursos.push('MERDA') // COLOCA NO FINAL DO ARRAY
cursos.push('C#') 
cursos.pop() // TIRA DO FINAL DO ARRAY
*/

console.log(cursos[3][3][2]) // MATRIZ

const caixa = document.querySelector('#caixa')

cursos.map((el)=>{
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})
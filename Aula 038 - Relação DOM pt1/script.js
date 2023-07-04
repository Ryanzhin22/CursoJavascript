const caixa1 = document.querySelector('#caixa1')
const cursos = [...document.querySelectorAll('#c1')]

console.log(caixa1.children[caixa1.children.length-1])
console.log(caixa1.firstChild)
console.log(caixa1.lastChild)

console.log(document.getRootNode())
console.log(caixa1.ownerDocument)
const caixa1 = document.querySelector('#caixa1')
const c1 = [...document.querySelectorAll('.curso')]

console.log(c1[0].hasChildNodes()) // Retorna TRUE se tem filhos, como um TEXTO
console.log(c1[0].children) // Retorna os ELEMENTOS da coleção

if(caixa1.children.length > 0){
    console.log('Tem filhos')
}else{
    console.log('Não tem filhos')
}

console.log(caixa1.firstElementChild.innerHTML = 'Oi gente')
console.log(caixa1.children[1].innerHTML = 'Oi gente 2')
const todasDiv = [...document.getElementsByTagName('div')]
const cursosTodos = [...document.getElementsByClassName('curso')]
const c1 = [...document.getElementsByClassName('c1')]
const c2 = [...document.getElementsByClassName('c2')]
const cursoEspecial = document.getElementById('c1')

//const query_todasDiv = [...document.querySelectorAll("div[class]")]
const query_todasDiv = [...document.querySelectorAll("div > p")]
const query_cursosTodos = [...document.querySelectorAll(".curso")]
const query_c1 = [...document.querySelectorAll('.c1,p')]
const query_c2 = [...document.querySelectorAll('.c2')]
const query_cursoEspecial = document.querySelectorAll('#c1')[0]
//const query_cursoEspecial = document.querySelector('#c1')

console.log(query_todasDiv)

/*
console.log(todasDiv)
console.log(cursosTodos)
console.log(c1)
console.log(c2)
console.log(cursoEspecial)
*/
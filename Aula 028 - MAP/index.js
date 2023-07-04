// const cursos = ['HTML', 'CSS', 'PHP', "Javascript", "React"]
// cursos.map((elementos, indice) => {
//     console.log("O Curso de " + elementos + " Está na posição: " + indice)
// })

// let el = document.getElementsByTagName("div")
// el = [...el]
// el.map((e,i)=>{
//     console.log(e.innerHTML)
// })

// const el = document.getElementsByTagName("div")
// const val = Array.prototype.map.call(el,({innerHTML})=>innerHTML)
// console.log(val)

const converterInt = (v) => parseInt(v)
const dobrarEle = (v) => v*2
let num = ['1', '2', '3', '4', '5'].map(converterInt)
console.log(num)
console.log(num.map(dobrarEle))

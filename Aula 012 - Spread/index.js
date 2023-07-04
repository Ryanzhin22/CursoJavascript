const objs1 = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]

// objs2 tem muito mais funções para ser trabalhado

objs2.forEach(element => {
    console.log(element)
    element.innerHTML = "Curso"
});

console.log(objs1)
console.log(objs2)


/*const soma = (v1,v2,v3) => {
    return v1+v2+v3
}

let valores = [1,3,5]

console.log(soma(...valores))*/

/*const jogador1 = {nome:"Ryan",energia:100,vidas:3,magia:150}
const jogador2 = {nome:"Bruno Jorge",energia:100,vidas:5,velocidade:80}
const jogador3 = {...jogador1, ...jogador2}

console.log(jogador3)*/
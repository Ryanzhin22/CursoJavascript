/*
function soma(...valores){
    var tam = valores.length
    let total = 0
    for(let i=0 ; i<tam ; i++){
        total+=valores[i]
    }
    return total
}
console.log(soma(10,4,6,3))
*/

function soma(...valores){
    let total = 0
    for(i of valores){
        total+=i
    }
    return total
}
console.log(soma(10,4,6,3))
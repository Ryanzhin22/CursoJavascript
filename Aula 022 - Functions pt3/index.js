/*
function soma(p1){
    console.log(p1)
    if(p1 == false){
        console.log("Condição falsa")
    }
}
soma("Ryan")
soma(false)
*/

let valor = 0
function add(v){
    return valor+=v
}
add(10)
console.log(valor)
add(60)
console.log(valor)

const valorPadrao = 0
function soma(n1=valorPadrao,n2=valorPadrao){
    return n1+n2
}
console.log(soma(3,5))
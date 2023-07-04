/*
function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}
const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
*/

// FUNÇÃO GERADORA COM CONST

/*
function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const idade = yield 'Quantos anos você tem?'
    const esporte = yield 'Qual seu esporte preferido?'
    return "Seu nome é " + nome + ", você tem " + idade + " anos, e seu esporte preferido é " + esporte 
}
    const itp = perguntas()
    console.log(itp.next().value)
    console.log(itp.next('Ryan').value)
    console.log(itp.next(17).value)
    console.log(itp.next('Vôlei').value)
*/

function* contador(){
    let i = 0
    while(true){
        yield ++i
        if(i>=10){
            break
        }
    }
}
let itc = contador()
//for(i = 0 ; i<10 ; i++){
//    console.log(itc.next().value)
//}
for(let c of itc){
    console.log(c)
}

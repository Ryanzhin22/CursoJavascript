/*
let n = 1
let max = 1000

while(n<=1000){
    console.log(n + ' - Loopzinho')
    if(n>=50){
        break
    }
    n++
}
*/

let n = 1
let max = 1000
let pares = 0

for(let i = n; i<=max ; i++){
    if(i%2!=0){
        continue
    }
    pares++
}
console.log("Números pares: " + pares)
console.log("Fim do programa")
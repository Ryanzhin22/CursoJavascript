const idades = [15,21,30,17,18,44,12,50]

//const filtroMaior18 = (valor,indice,arr)=>{
const filtroMaior18 = (valor)=>{
    if(valor >= 18){
        return valor
    }
} 
const maior = idades.filter(filtroMaior18)
const menor = idades.filter((valor)=>{
    if(valor < 18)
        return valor
})

console.log(idades)
console.log(maior)
console.log(menor)

/*
const maior = []
idades.map((el)=>{
    if(el >= 18){
        maior.push(el)
    }
})
console.log(maior)
*/
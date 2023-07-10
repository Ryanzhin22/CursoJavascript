const caixa = document.querySelector('#caixa')

let mapa = new Map()
mapa.set('curso', 'JavaScript')
mapa.set(1,'Ryan')
mapa.set("canal", 130)

//mapa.delete(1) //DELETA A CHAVE

console.log(mapa)

if(mapa.has(1)){
    caixa.innerHTML = 'A chave existe na coleção, e é o valor: ' + mapa.get(1) 
} else{
    caixa.innerHTML = "A chave NÃO está na coleção"
}
caixa.innerHTML += "<br>O tamanho da coleção é " + mapa.size

mapa.forEach((el,i)=>{
    console.log("O elemento é: "+el,", com a chave: "+i)
})
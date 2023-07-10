const arr = document.querySelector('#array')
const btnVerificar = document.querySelector('#btnVerificar') 
const resultado = document.querySelector('#resultado')

const elementos_array = [21,10,19,20,25,18,22]
arr.innerHTML = elementos_array

btnVerificar.addEventListener('click',()=>{
    const ret = elementos_array.every((e,i)=>{
        if(e<18){
            resultado.innerHTML = 'Array não conforme, na posição: ' + i + ", Sendo o número: " + e
        }
        return e>=18
    })
    if(ret == true){
        resultado.innerHTML = "OK"
    }
})

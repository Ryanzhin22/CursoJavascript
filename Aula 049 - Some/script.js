const arr = document.querySelector('#array')
const btnVerificar = document.querySelector('#btnVerificar') 
const resultado = document.querySelector('#resultado')

const elementos_array = [16,12,10,17,15,13,11,19]
arr.innerHTML = elementos_array

btnVerificar.addEventListener('click',()=>{
    const ret = elementos_array.some((e,i)=>{
        if(e<18){
            resultado.innerHTML = 'Array não conforme, na posição: ' + i + ", Sendo o número: " + e
        }
        return e>=18
    })
    if(ret == true){
        resultado.innerHTML = "OK"
    }
})

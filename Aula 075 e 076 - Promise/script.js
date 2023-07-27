const numero = document.querySelector("#numero")
const btn_promessa = document.querySelector("#btn_promessa")

btn_promessa.addEventListener('click',(evt)=>{
    numero.innerHTML = "Processando..."
    promessa()
})

const promessa=()=>{
    let p = new Promise((resolve,reject)=>{
    let resultado = false
    let tempo = 3000

    setTimeout(()=>{
        if(resultado == true){
            resolve("Deu tudo certo")
            numero.innerHTML = "Deu tudo certo"
            numero.classList.remove("erro")
            numero.classList.add("ok")
        }else{
            reject("Deu tudo errado")
            numero.innerHTML = "Deu tudo certo"
            numero.classList.remove("ok")
            numero.classList.add("erro")
        }
    }, tempo)
})
return p
}

numero.innerHTML = "Esperando..."
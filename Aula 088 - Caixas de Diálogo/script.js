const btn_alert = document.querySelector("#btn_alert")
const btn_confirm = document.querySelector("#btn_confirm")
const btn_prompt = document.querySelector("#btn_prompt")

btn_alert.addEventListener('click', ()=>{
    alert('Olá, como você está?')
})

btn_confirm.addEventListener('click', ()=>{
    const btn = confirm('Você está aprendendo muito?') // Retorna true ou false
    console.log(btn)
    if(btn){
        console.log("Botão OK pressionado")
    }else{
        console.log("Botão CANCELAR pressionado")
    }
})

btn_prompt.addEventListener('click', ()=>{
    const btn = prompt('Digite seu nome: ') // Retorna uma String ou Nulo
    if(btn){
        console.log(`Seu nome é ${btn}, OK.`)
    }else{
        console.log("Valor NULO")
    }
})
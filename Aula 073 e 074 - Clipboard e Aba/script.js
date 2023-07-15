const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const teclaCopiar = document.querySelector('.tcpy')
const teclaLimpar = document.querySelector('#tlimpar')
const tigual = document.querySelector("#tigual")
const calc_aba = document.querySelector(".calc_aba")
const calc = document.querySelector(".calc")
const aba_img = document.querySelector('#aba_img')

let sinal = false
let decimal = false

teclasNum.map((el)=>{
    el.addEventListener('click',(evt)=>{
        sinal = false
        if(evt.target.innerHTML == "."){
            if(decimal==false){
                decimal = true
                if(display.innerHTML=="0"){
                    display.innerHTML="0."
                } else{
                    display.innerHTML += evt.target.innerHTML    
                } 
            }
        }else{
            if(display.innerHTML=="0"){
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.map((el)=>{
    el.addEventListener('click',(evt)=>{
        if(sinal==false){
            sinal = true
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "x"){
                display.innerHTML += "*"
            } else{
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

teclaLimpar.addEventListener('click',()=>{
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

tigual.addEventListener('click', ()=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

tcpy.addEventListener('click',(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
    /*
    PARA PREVENIR ERROS EM DISPOSITIVOS MOBILES FAZEMOS: 
        teste.select()
        teste.setSelectionRange(0,99999)
        navigator.clipboard.writeText(teste.value)
    */
})

calc_aba.addEventListener('click',(evt)=>{
    calc.classList.toggle('calc_exibir')
    if(calc.classList.contains("calc_exibir")){
        aba_img.setAttribute('src', 'seta_esquerda.svg')
    }else{
        aba_img.setAttribute('src', 'seta_direita.svg')
    }
})
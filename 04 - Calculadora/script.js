const calc_aba = document.querySelector('.calc_aba')
const aba_img = document.querySelector('#aba_img')
const calc = document.querySelector('.calc')
const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaLimpar = document.querySelector('#tlimpar')
const display = document.querySelector('#display')
const tigual = document.querySelector("#tigual")
const tcpy = document.querySelector("#tcpy")

let sinais = false
let decimal = false

calc_aba.addEventListener('click', ()=>{
    calc.classList.toggle('calc_exibir')
    if(calc.classList.contains('calc_exibir')){
        aba_img.setAttribute('src', 'seta_esquerda.svg')
    }else{
        aba_img.setAttribute('src', 'seta_direita.svg')
    }
})

teclasNum.map((el)=>{
    el.addEventListener('click', (evt)=>{
        sinais=false
        if(evt.target.innerHTML == "."){
            if(decimal==false){
                decimal=true
                if(display.innerHTML=="0"){
                    display.innerHTML="0."
                } else{
                    display.innerHTML += evt.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.map((el)=>{
    el.addEventListener('click', (evt)=>{
        if(sinais==false){
            sinais=true
            //decimal=true TESTAR DPS
            if(display.innerHTML=="0"){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "x"){
                display.innerHTML += "*"
            }else{
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

teclaLimpar.addEventListener('click',()=>{
    decimal=false
    sinais=false
    display.innerHTML = "0"
})

tigual.addEventListener('click',()=>{
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

tcpy.addEventListener('click', ()=>{
    navigator.clipboard.writeText(display.innerHTML)
})
const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const teclaOn = document.querySelector('.ton')
const teclaLimpar = document.querySelector('#tlimpar')
const tigual = document.querySelector("#tigual")

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
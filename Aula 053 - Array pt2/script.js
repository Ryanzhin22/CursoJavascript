const valor1 = document.querySelector('#valor1')
const valor2 = document.querySelector('#valor2')
const res = document.querySelector('#res')
const btnSoma = document.querySelector('#soma')
const btnSub = document.querySelector('#sub')
const btnMult = document.querySelector('#mult')
const btnDiv = document.querySelector('#div')

const calc = [
    (v1,v2)=>{
        const res = v1+v2
        return res
    },
    (v1,v2)=>{
        const res = v1-v2
        return res
    },
    (v1,v2)=>{
        const res = v1*v2
        return res
    },
    (v1,v2)=>{
        const res = v1/v2
        return res
    }
]

btnSoma.addEventListener('click',()=>{
    res.value = calc[0](parseInt(valor1.value),parseInt(valor2.value))
})

btnSub.addEventListener('click', ()=>{
    res.value = calc[1](parseInt(valor1.value),parseInt(valor2.value))
})

btnMult.addEventListener('click', ()=>{
    res.value = calc[2](parseInt(valor1.value),parseInt(valor2.value))
})

btnDiv.addEventListener('click', ()=>{
    res.value = calc[3](parseInt(valor1.value),parseInt(valor2.value))
})
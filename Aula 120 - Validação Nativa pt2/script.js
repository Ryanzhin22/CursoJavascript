const f_nome = document.querySelector("#f_nome")
const f_nota = document.querySelector("#f_nota")
const f_msg = document.querySelector("#f_msg")

document.querySelector('#btn_validar').addEventListener('click',(evt)=>{
    let msg = null
    
    if(f_nota.validity.valueMissing){
        msg = "Este campo é obrigatório!!!"
    }else if (f_nota.validity.rangeOverflow){
        msg = "Nota alta demais para ser usada!!!"
    }else if (f_nota.validity.rangeUnderflow){
        msg = "Nota baixa demais para ser usada!!!"
    }

    f_msg.innerHTML = msg
    evt.preventDefault()
})


/*
document.querySelector('#btn_validar').addEventListener('click',(evt)=>{
    let estadoValidacao = f_nota.validity //  Estado da validação
    
    if(estadoValidacao.valueMissing){
        f_nota.setCustomValidity("Este campo é obrigatório!!!")
    }else if (estadoValidacao.rangeOverflow){
        f_nota.setCustomValidity("Nota alta demais para ser usada!!!")
    }else if (estadoValidacao.rangeUnderflow){
        f_nota.setCustomValidity("Nota baixa demais para ser usada!!!")
    }

    f_nota.reportValidity()
    f_msg.innerHTML = f_nota.validationMessage

    evt.preventDefault()
})
*/

    // if(!f_nota.checkValidity()){ // checkValidity() é um método de validação do DOM
    //     msg = f_nota.validationMessage // validationMessage é uma propriedade de  validação do DOM
    // }
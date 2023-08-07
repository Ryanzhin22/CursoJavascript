const f_nome = document.querySelector("#f_nome")
const f_nota = document.querySelector("#f_nota")
const f_msg = document.querySelector("#f_msg")

document.querySelector('#btn_validar').addEventListener('click',(evt)=>{
    let msg = null
    
    if(!f_nota.checkValidity()){ // checkValidity() é um método de validação do DOM
        msg = f_nota.validationMessage // validationMessage é uma propriedade de  validação do DOM
    }

    f_msg.innerHTML = msg
    evt.preventDefault()
})
 
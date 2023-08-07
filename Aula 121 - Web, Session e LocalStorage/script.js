const f_texto = document.querySelector('#f_texto')
const p_texto = document.querySelector("#p_texto")
const btn_texto = document.querySelector("#btn_texto")

btn_texto.addEventListener('click', (evt)=>{

})

let num = 10
const curso = "Javascript"
// window.localStorage.setItem("numero",num) // setItem(Chave, Valor)

localStorage.setItem("nome","Ryan")
localStorage.setItem("canal","Ryanzhin22")
localStorage.setItem("curso",curso)

alert(localStorage.length)
alert(localStorage.getItem(localStorage.key(2)))

// alert(localStorage.getItem("nome"))
// alert(localStorage.getItem("canal"))
// alert(localStorage.getItem("curso"))

// localStorage.clear() // Tira tudo do localStorage

sessionStorage.setItem("nome","Ryan")
sessionStorage.setItem("canal","Ryanzhin22")
sessionStorage.setItem("curso",curso)
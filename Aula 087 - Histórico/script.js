const url = document.querySelector("#url")
const btn_url = document.querySelector("#btn_url")

btn_url.addEventListener("click", (evt)=>{
    //window.location = "https://www.google.com.br"
    //window.location.replace("https://www.google.com.br") //Deleta a URL atual e coloca a do parênteses
    //window.location.assign("https://www.google.com.br") //Não deleta a URL atual, consegue voltar para a página anterior
    //window.location.reload()
    //window.history.back()
    //window.history.forward()
    //window.history.go(-1)
    //console.log(window.history.length)
    evt.preventDefault()
    window.location = url.value
})
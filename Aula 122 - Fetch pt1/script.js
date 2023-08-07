const btn_texto = document.querySelector("#btn_texto")

fetch("https://ryancursos.ryanbarbosa1.repl.co")
.then(res=>res.json()) // Retorna os dados em texto
.then(dados=>{
    console.log(dados)
})
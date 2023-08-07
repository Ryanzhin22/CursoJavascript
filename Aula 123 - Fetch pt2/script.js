const btn_texto = document.querySelector("#btn_texto")
const p_temp = document.querySelector("#p_temp")
const p_nivel = document.querySelector("#p_nivel")
const p_press = document.querySelector("#p_press")

const obterDados = () => {
    fetch("https://ryancursos.ryanbarbosa1.repl.co")
    .then(res=>res.json()) // Retorna os dados em texto
    .then(dados=>{
        console.log(dados)
        p_temp.innerHTML = "Temperatura: " + dados.temperatura
        p_nivel.innerHTML = "Nível: " + dados.nivel
        p_press.innerHTML = "Pressão: " + dados.pressao
    })
}

let intervalo = setInterval(obterDados,3000)
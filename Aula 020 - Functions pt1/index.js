function soma(){
    let n1 = 2
    let n2 = 10
    let somar = n1 + n2
    console.log(somar)
}

for (let i = 1; i<=3 ; i++){
    soma()
}

function mudarTexto(){
    let d1 = document.getElementById('d1')
    let d2 = document.getElementById('d2')
    let d3 = document.getElementById('d3')
    d1.innerHTML = "Ryanzhin22"
    d2.innerHTML = "Ryanzhin"
    d3.innerHTML = "Ryan"
}
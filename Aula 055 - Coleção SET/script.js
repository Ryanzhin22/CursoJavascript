const caixa = document.querySelector("#caixa")

let musicas = new Set(["musica1", "musicaboa","musica10"])

musicas.add("musica muito legal")
musicas.add('musica1')
musicas.add('musica10')

//musicas.delete("musica1") // DELETA A MUSICA

console.log(musicas)

musicas.forEach((el)=>{
    caixa.innerHTML += el + "<br>"
})

for(m of musicas){
    caixa.innerHTML += m + "<br>"
}
const arr = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

const elementos_array = ["html","css","javascript"]
arr.innerHTML = elementos_array

btnPesquisar.addEventListener('click', ()=>{
    const ret = elementos_array.find((e,i)=>{
        resultado.innerHTML = 'Não achamos nenhum valor com essa pesquisa'
        if(e.toUpperCase() == txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML = 'Achamos: ' + txt_pesquisar.value + ", na posição " + i
            return e
        }
    })
    console.log(ret)
})

const config = {
  cor: "#48f",
};
const cxmsg = new Cxmsg(config)

const btn_mostrarCaixa = document.querySelector("#btn_mostrarCaixa");
const btn_mostrarCaixa2 = document.querySelector("#btn_mostrarCaixa2");
const btn_mostrarCaixa3 = document.querySelector("#btn_mostrarCaixa3");

btn_mostrarCaixa.addEventListener('click', ()=>{
    cxmsg.mostrar("CFB Curso", "Curso de Javascript")
})

btn_mostrarCaixa2.addEventListener("click", ()=>{
    cxmsg.mostrar("Youtube", "Canal com cursos de programação")
})

btn_mostrarCaixa3.addEventListener('click', ()=>{
    cxmsg.mostrar("Javascript", "Aula 137")
})
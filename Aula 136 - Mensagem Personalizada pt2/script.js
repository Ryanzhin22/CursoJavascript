const config = {
    titulo:"Teste",
    texto:"CFB Cursos",
    cor: "#48f"
}
const cxmsg = new Cxmsg(config)

const btn_mostrarCaixa = document.querySelector("#btn_mostrarCaixa");

btn_mostrarCaixa.addEventListener('click', ()=>{
    cxmsg.mostrar()
})
import { Cxmsg } from "./cxmsg.js";

const config = {
  cor: "#48f",
};
Cxmsg.config(config);

const btn_mostrarCaixa = document.querySelector("#btn_mostrarCaixa");
const btn_mostrarCaixa2 = document.querySelector("#btn_mostrarCaixa2");
const btn_mostrarCaixa3 = document.querySelector("#btn_mostrarCaixa3");

btn_mostrarCaixa.addEventListener("click", () => {
  Cxmsg.mostrar("CFB Curso", "Curso de Javascript");
});

btn_mostrarCaixa2.addEventListener("click", () => {
  Cxmsg.mostrar("Youtube", "Canal com cursos de programação");
});

btn_mostrarCaixa3.addEventListener("click", () => {
  Cxmsg.mostrar("Javascript", "Aula 137");
});

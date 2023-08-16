import { Cxmsg } from "./cxmsg.js";

const config = {
  cor: "#48f",
  tipo: "sn", // OK ou Sim/Não
  textos: ["SIM", "NÃO"],
  comando_sn: () => {},
};

const fsim = () => {
  console.log("Botão SIM pressionado");
};

const btn_mostrarCaixa = document.querySelector("#btn_mostrarCaixa");
const btn_mostrarCaixa2 = document.querySelector("#btn_mostrarCaixa2");
const btn_mostrarCaixa3 = document.querySelector("#btn_mostrarCaixa3");

btn_mostrarCaixa.addEventListener("click", () => {
  config.tipo = "ok";
  Cxmsg.mostrar(config, "CFB Curso", "Curso de Javascript");
});

btn_mostrarCaixa2.addEventListener("click", () => {
  config.tipo = "sn";
  config.comando_sn = () => {
    fsim(); // Quando SIM for pressionado, será emitido essa função
  };
  Cxmsg.mostrar(config, "Youtube", "Canal com cursos de programação");
});

btn_mostrarCaixa3.addEventListener("click", () => {
  config.tipo = "sn";
  config.textos = ["OK", "Cancela"];
  config.comando_sn = () => {}; // OK não emitirá nenhuma função
  Cxmsg.mostrar(config, "Javascript", "Aula 137");
});

const timer = document.querySelector("#timer");
const btn_iniciar = document.querySelector("#btn_iniciar");
const btn_parar = document.querySelector("#btn_parar");
const btn_zerar = document.querySelector("#btn_zerar");
const btn_parcial = document.querySelector("#btn_parcial");
const caixa2 = document.querySelector(".parciais")
const todasParciais = document.querySelector(".todasParciais");
const btn_zerarParciais = document.querySelector("#btn_zerarParciais");

let intervalo = null;
let timeInicial = null;

const contador = () => {
  const timeAtual = Date.now();
  let cont = timeAtual - timeInicial;
  let seg = Math.floor(cont / 1000);
  timer.innerHTML = converter(seg);
};

const converter = (seg) => {
  let sobra = seg;

  let hora = Math.floor(sobra / 3600);
  sobra = sobra % 3600;

  let minuto = Math.floor(sobra / 60);
  sobra = sobra % 60;

  let segundo = Math.floor(sobra);

  // let hora = Math.floor(seg / 3600);
  // let resto = seg % 3600;
  // let minuto = Math.floor(resto / 60);
  // let segundo = Math.floor(resto % 60);
  let tempoFormatado =
    (hora < 10 ? "0" + hora : hora) +
    ":" +
    (minuto < 10 ? "0" + minuto : minuto) +
    ":" +
    (segundo < 10 ? "0" + segundo : segundo);

  return tempoFormatado;
};

btn_iniciar.addEventListener("click", () => {
  timeInicial = Date.now();
  intervalo = setInterval(contador, 1000);
});

btn_parar.addEventListener("click", () => {
  clearInterval(intervalo);
});

btn_zerar.addEventListener("click", () => {
  timeInicial = Date.now();
  timer.innerHTML = "00:00:00"
  clearInterval(intervalo)
});

btn_parcial.addEventListener("click", ()=>{
  let parcial = "<div>" + timer.innerHTML + "</div>"
  todasParciais.innerHTML += parcial
})

btn_zerarParciais.addEventListener("click", ()=>{
  todasParciais.innerHTML = ""
})
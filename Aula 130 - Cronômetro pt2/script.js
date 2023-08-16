const timer = document.querySelector("#timer");
const timeInicial = Date.now();

const contador = () => {
  const timeAtual = Date.now();
  let cont = timeAtual - timeInicial;
  let seg = Math.floor(cont / 1000);
  timer.innerHTML = converter(seg)
};

const converter = (seg) => {
  let hora = Math.floor(seg / 3600)
  let resto = seg % 3600
  let minuto = Math.floor(resto / 60)
  let segundo = Math.floor(resto % 60);
  let formatado = (hora < 10 ? "0" + hora : hora) + ":" + (minuto < 10 ? "0" + minuto : minuto) + ":" + (segundo < 10 ? "0" + segundo : segundo) 

  return formatado
}

setInterval(contador, 1000);

contador();

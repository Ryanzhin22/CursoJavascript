const timer = document.querySelector("#timer");
const timeInicial = Date.now();

const contador = () => {
  const timeAtual = Date.now();
  let cont = timeAtual - timeInicial;
  let seg = Math.floor(cont / 1000);
};

setInterval(contador, 1000);

contador();

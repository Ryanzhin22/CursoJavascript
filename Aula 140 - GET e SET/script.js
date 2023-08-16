const btn_texto = document.querySelector("#btn_texto");
const disp = document.querySelector("#tmp");
const qual = document.querySelector("#nvl");
const perf = document.querySelector("#prs");

let dados = {
  _disponibilidade: 0,
  _qualidade: 0,
  _performance: 0,
  set valores(val) {
    this._disponibilidade = val.disponibilidade;
    this._qualidade = val.qualidade;
    this._performance = val.performance;
    disp.innerHTML = this._disponibilidade
    qual.innerHTML = this._qualidade
    perf.innerHTML = this._performance
  },
  get valores() {
    return [this._disponibilidade, this._qualidade, this._performance];
  },
};

const buscar = () => {
  fetch("https://ryancursos.ryanbarbosa1.repl.co")
    .then((res) => res.json()) // Retorna os dados em texto
    .then((res) => {
      dados.valores = res;
    });
};

let intervalo = setInterval(buscar, 1000);
console.log(dados.valores);

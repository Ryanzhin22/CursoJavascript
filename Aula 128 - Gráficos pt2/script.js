const ctx = document.getElementById("grafico1");
let labelsX = ["Disponibilidade", "Qualidade", "Performance"];
let valores = [0, 0, 0];

let grafico1 = new Chart(ctx, {
  type: "bar",
  data: {
    labels: labelsX,
    datasets: [
      {
        label: "# of Votes",
        data: valores,
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const obterDados = () => {
  const endpoint = "https://ryancursos.ryanbarbosa1.repl.co/";
  fetch(endpoint)
    .then((res) => res.json()) // Consumir a promisse
    .then((res) => {
      valores[0] = res.disponibilidade;
      valores[1] = res.qualidade;
      valores[2] = res.performance;
      grafico1.update();
    }) // Utilizar os dados
    .catch((erro) => {
      console.log("ERRO: " + erro);
    }); // Tratamento de erro
};

setInterval(obterDados, 2000);

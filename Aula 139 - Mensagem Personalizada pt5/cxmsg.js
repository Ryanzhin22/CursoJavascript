class Cxmsg {
  static cor = "#888"; //valor fixo
  static destino = null;
  static divmsg = null;
  static tipo = null;
  static comando_sn = null;
  static textos = [];

  static mostrar = (config, titulo, texto) => {
    this.cor = config.cor;
    this.tipo = config.tipo;
    this.textos = config.textos;
    this.comando_sn = () => {
      config.comando_sn();
    };
    this.destino = document.body;
    this.titulo = titulo;
    this.texto = texto;

    this.divmsg = document.createElement("div");
    const estilo_divmsg =
      "display: flex;" +
      "justify-content: center;" +
      "align-items: center;" +
      "position: absolute;" +
      "top: 0px;" +
      "left: 0px;" +
      "width: 100%;" +
      "height: 100vh;" +
      "background-color: rgba(0,0,0,0.7);" +
      "z-index:999999999";
    this.divmsg.setAttribute("id", "divmsg");
    this.divmsg.setAttribute("style", estilo_divmsg);
    this.destino.prepend(this.divmsg);

    const areaCaixa = document.createElement("div");
    const estilo_areaCaixa =
      "display: flex;" +
      "justify-content: flex-start;" +
      "align-items: flex-start;" +
      "flex-direction: column;" +
      "width: 300px;";
    areaCaixa.setAttribute("id", "caixaMsg");
    areaCaixa.setAttribute("style", estilo_areaCaixa);
    this.divmsg.appendChild(areaCaixa);

    const tituloCaixa = document.createElement("div");
    const estilo_titulo =
      "display: flex;" +
      "justify-content: flex-start;" +
      "align-items: center;" +
      "width: 100%;" +
      "background-color:" +
      this.cor +
      ";" +
      "color: #fff;" +
      "padding: 5px;" +
      "border-radius: 5px 5px 0px 0px;";
    tituloCaixa.setAttribute("style", estilo_titulo);
    tituloCaixa.innerHTML = this.titulo;
    areaCaixa.appendChild(tituloCaixa);

    const corpoCaixa = document.createElement("div");
    const estilo_corpo =
      "display: flex;" +
      "justify-content: flex-start;" +
      "align-items: center;" +
      "width: 100%;" +
      "background-color: #eee;" +
      "color: #000;" +
      "padding: 30px 5px;";
    corpoCaixa.setAttribute("style", estilo_corpo);
    corpoCaixa.innerHTML = this.texto;
    areaCaixa.appendChild(corpoCaixa);

    const rodapeCaixa = document.createElement("div");
    const estilo_rodape =
      "display: flex;" +
      "justify-content: space-around;" +
      "align-items: center;" +
      "width: 100%;" +
      "background-color: #ccc;" +
      "color: #000;" +
      "padding: 5px;" +
      "border-radius: 0px 0px 5px 5px;";
    rodapeCaixa.setAttribute("style", estilo_rodape);
    areaCaixa.appendChild(rodapeCaixa);

    const estilo_btn =
      "background-color: " +
      this.cor +
      ";" +
      "color:#fff;" +
      "padding:10px 50px;" +
      "border-radius: 5px;" +
      "cursor:pointer;" +
      "text-transform: uppercase;";
    if (this.tipo == "ok") {
      const btn_ok = document.createElement("button");
      btn_ok.setAttribute("style", estilo_btn);
      btn_ok.innerHTML = "OK";
      btn_ok.addEventListener("click", () => {
        this.ocultar();
      });
      rodapeCaixa.appendChild(btn_ok);
    } else if (this.tipo == "sn") {
      const btn_sim = document.createElement("button");
      btn_sim.setAttribute("style", estilo_btn);
      btn_sim.innerHTML = this.textos[0];
      btn_sim.addEventListener("click", () => {
        this.comando_sn();
        this.ocultar();
      });
      rodapeCaixa.appendChild(btn_sim);
      const btn_nao = document.createElement("button");
      btn_nao.setAttribute("style", estilo_btn);
      btn_nao.innerHTML = this.textos[1];
      btn_nao.addEventListener("click", () => {
        this.ocultar();
      });
      rodapeCaixa.appendChild(btn_nao);
    }
  };

  static ocultar = () => {
    this.divmsg.remove();
  };
}

export { Cxmsg };

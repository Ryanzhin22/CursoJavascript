class Cxmsg {
  titulo = null;
  texto = null;
  cor = null;
  destino = null;
  divmsg = null;
  constructor(config) {
    this.titulo = config.titulo;
    this.texto = config.texto;
    this.cor = config.cor;
    this.destino = document.body;
  }
  mostrar = () => {
    console.log(this.texto);
  };

  ocultar = () => {
    
  }
}

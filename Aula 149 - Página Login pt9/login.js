class Login {
  static logado = false;
  static matlogado = null;
  static nomelogado = null;
  static acessologado = null;
  static estiloCSS = null;
  static callback_ok = null;
  static callback_noOk = null;
  static config = {
    cor: "048",
    img: "./logo.png",
  };
  static endpoint = "https://api.ryanbarbosa1.repl.co/";

  static login = (callback_ok, callback_noOk, config = null) => {
    if (config != null) {
      this.config = config;
    }
    this.callback_ok = () => {
      callback_ok();
    };
    this.callback_noOk = () => {
      callback_noOk();
    };
    this.estiloCSS =
      ".fundoLogin{display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0,0,0,0.75);box-sizing: border-box;}" +
      ".baseLogin{display: flex;justify-content: center;align-items: stretch; width: 50%;box-sizing: inherit;}" +
      ".elementosLogin{display: flex;justify-content: center;align-items: flex-start;flex-direction: column;width: 60%;background-color: #eee;padding: 10px;border-radius: 10px 0px 0px 10px;box-sizing: inherit;}" +
      ".logoLogin{display: flex;justify-content: center;align-items: center;width: 50%;background-color: #bbb;padding: 10px;border-radius: 0px 10px 10px 0px ;box-sizing: inherit;}" +
      ".logoLogin img{width: 90%;}" +
      ".campoLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit;margin-bottom: 10px;}" +
      ".campoLogin label{font-size: 18px;}" +
      ".campoLogin input{font-size: 18px;padding: 5px;background-color: #fff;border-radius: 5px;}" +
      ".botoesLogin{display: flex;justify-content: space-around;align-items: center;width: 100%;box-sizing: inherit;}" +
      `.botoesLogin button{cursor: pointer;background-color: #${this.config.cor};color: #fff;border-radius: 5px;padding: 10px;width: 100px;box-sizing: inherit;}`;

    const styleEstilo = document.createElement("style");
    styleEstilo.setAttribute("id", "id_estiloLogin");
    styleEstilo.setAttribute("rel", "stylesheet");
    styleEstilo.setAttribute("type", "text/css");
    styleEstilo.innerHTML = this.estiloCSS;
    document.head.appendChild(styleEstilo);

    const fundoLogin = document.createElement("div");
    fundoLogin.setAttribute("id", "fundoLogin");
    fundoLogin.setAttribute("class", "fundoLogin");
    document.body.prepend(fundoLogin);

    const baseLogin = document.createElement("div");
    baseLogin.setAttribute("id", "baseLogin");
    baseLogin.setAttribute("class", "baseLogin");
    fundoLogin.appendChild(baseLogin);

    const elementosLogin = document.createElement("div");
    elementosLogin.setAttribute("id", "elementosLogin");
    elementosLogin.setAttribute("class", "elementosLogin");
    baseLogin.appendChild(elementosLogin);

    const campoLoginEmail = document.createElement("div");
    campoLoginEmail.setAttribute("id", "campoLoginEmail");
    campoLoginEmail.setAttribute("class", "campoLogin");
    elementosLogin.appendChild(campoLoginEmail);

    const labelEmail = document.createElement("label");
    labelEmail.innerHTML = "Email:";
    campoLoginEmail.appendChild(labelEmail);

    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("id", "f_username");
    inputEmail.setAttribute("type", "text");
    inputEmail.setAttribute("name", "f_username");
    campoLoginEmail.appendChild(inputEmail);

    const campoLoginSenha = document.createElement("div");
    campoLoginSenha.setAttribute("id", "campoLoginSenha");
    campoLoginSenha.setAttribute("class", "campoLogin");
    elementosLogin.appendChild(campoLoginSenha);

    const labelSenha = document.createElement("label");
    labelSenha.innerHTML = "Senha:";
    campoLoginSenha.appendChild(labelSenha);

    const inputSenha = document.createElement("input");
    inputSenha.setAttribute("id", "f_senha");
    inputSenha.setAttribute("type", "password");
    inputSenha.setAttribute("name", "f_senha");
    campoLoginSenha.appendChild(inputSenha);

    const botoesLogin = document.createElement("div");
    botoesLogin.setAttribute("class", "botoesLogin");
    elementosLogin.appendChild(botoesLogin);

    const btn_login = document.createElement("button");
    btn_login.innerHTML = "Login";
    btn_login.addEventListener("click", () => {
      this.verificaLogin();
    });
    btn_login.setAttribute("id", "btn_login");
    botoesLogin.appendChild(btn_login);

    const btn_cancelar = document.createElement("button");
    btn_cancelar.innerHTML = "Cancelar";
    btn_cancelar.addEventListener("click", () => {
      this.fechar();
    });
    btn_cancelar.setAttribute("id", "btn_cancelar");
    botoesLogin.appendChild(btn_cancelar);

    const logoLogin = document.createElement("button");
    logoLogin.setAttribute("id", "logoLogin");
    logoLogin.setAttribute("class", "logoLogin");
    baseLogin.appendChild(logoLogin);

    const imgLogoLogin = document.createElement("button");
    imgLogoLogin.setAttribute("src", this.config.img);
    imgLogoLogin.setAttribute("title", "CFBCursos");
    baseLogin.appendChild(imgLogoLogin);
  };

  static verificaLogin = () => {
    const mat = document.querySelector("#f_username").value;
    const pas = document.querySelector("#f_senha").value;

    const endpoint = `https://api.ryanbarbosa1.repl.co/?matricula=${mat}&senha=${pas}`;
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          this.logado = true;
          this.matlogado = mat;
          this.nomelogado = res.nome;
          this.acessologado = res.acesso;
          this.callback_ok()
          this.fechar();
        } else {
          this.logado = false;
          this.matlogado = null;
          this.nomelogado = null;
          this.acessologado = null;
          this.callback_noOk()
        }
      });
  };

  static fechar = () => {
    const id_estiloLogin = document.querySelector("#id_estiloLogin");
    id_estiloLogin.remove();
    const fundoLogin = document.querySelector("#fundoLogin");
    fundoLogin.remove();
  };
}

export { Login };

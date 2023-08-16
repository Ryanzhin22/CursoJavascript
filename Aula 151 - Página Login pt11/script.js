import { Cxmsg } from "../Aula 139 - Mensagem Personalizada pt5/cxmsg.js"

const callback_ok = () => {}

const callback_noOk = () => {
  const config = {
    cor: "#800",
    tipo: "ok",
    textos: null,
    comando_sn: ()=>{},
  };
  Cxmsg.mostrar(config, "Erro", "Login não efetuado! Usuário ou senha incorretos.");
}

const configLogin = {
  cor: "048",
  img: "alogo.webp",
  endpoint: "https://api.ryanbarbosa1.repl.co",
};

Login.login(callback_ok, callback_noOk, configLogin);

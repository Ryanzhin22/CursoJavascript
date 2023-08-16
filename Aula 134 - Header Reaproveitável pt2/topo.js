const body = document.body

const estiloTopo = 
    "display: flex;"+
    "justify-content: space-between;"+
    "align-items: center;"+
    "background-color: #eee;"

const div = document.createElement('div')
div.setAttribute('id', 'topo')
div.setAttribute('style', estiloTopo)
body.prepend(div) // Prepend anexa no início

const estiloImgLogo = "width: 200px;"
const logo = 
    "<div id='logo' class='logo'>"+
        "<img src='logo.png'  title='LogoPlaholder' style='"+estiloImgLogo+"'>"+
    "</div>"
topo.innerHTML += logo

const login =
  "<div id='login' class='login'>" +
    "<p id='matricula'>Matrícula: <span></span></p>" +
    "<p id='nome'>Nome: <span></span></p>" +
  "</div>";
topo.innerHTML += login
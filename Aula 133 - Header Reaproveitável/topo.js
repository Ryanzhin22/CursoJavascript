const head = document.head
const body = document.body

const estilo = '<link rel="stylesheet" href="topo.css" type="text/css" />'
head.innerHTML += estilo

const div = document.createElement('div')
div.setAttribute('id', 'topo')
div.setAttribute('class', 'topo')
body.prepend(div) // Prepend anexa no início

const logo = 
    "<div id='logo' class='logo'>"+
        "<img src='logo.png'  title='LogoPlaholder' >"+
    "</div>"
topo.innerHTML += logo

const login =
  "<div id='login' class='login'>" +
    "<p id='matricula'>Matrícula: <span></span></p>" +
    "<p id='nome'>Nome: <span></span></p>" +
  "</div>";
topo.innerHTML += login
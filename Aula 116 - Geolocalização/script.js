const long = document.querySelector("#long")
const lati = document.querySelector("#lati")

if(navigator.geolocation){
    
    navigator.geolocation.getCurrentPosition(mostrarLocalização,erroLocalização)

}else{
    console.log("Geolocalização não executada")
}

function mostrarLocalização(pos){
    console.log(pos)
    lati.innerHTML = `Latitude: ${pos.coords.latitude}`
    long.innerHTML = `Longitude: ${pos.coords.longitude}`
}

function erroLocalização(){
    console.log("Erro ao obter a localização")
}
// console.log(Date.now()) //CONSEGUE O TIMESTAMP
const div_data = document.querySelector("#div_data")
const relogio = document.querySelector(".relogio")

const data = new Date()
console.log(`Dia do Mês: ${data.getDate()}`) //Retorna o dia do mês
console.log(`Dia: ${data.getDay()}`) //Retorna o dia da Semana em Número
console.log(`Ano: ${data.getFullYear()}`) //Retorna o ano com 4 dígitos
console.log(`Horas: ${data.getHours()}`) //Horas
console.log(`Milisegundos: ${data.getMilliseconds()}`) //Milisegundos
console.log(`Minutos: ${data.getMinutes()}`) //Minutos
console.log(`Mês: ${data.getMonth()+1}`) //Mês do ano
console.log(`Segundos: ${data.getSeconds()}`) //Segundos
console.log(`TimeStamp: ${data.getTime()}`) //TimeStamp
console.log(`TimeStamp: ${Date.now()}`) //TimeStamp
console.log(`Timezone da Localidade: ${data.getTimezoneOffset()}`) //Timezone da Localidade

console.log('-------------------------')

const dia_m = data.getDate()<10 ? "0"+data.getDate() : data.getDate()
const mes = data.getMonth()<10 ? "0"+data.getMonth() : data.getMonth()
const dataString = dia_m + "/" + mes + "/" + data.getFullYear()

// div_data.innerHTML = dataString

const rel =()=>{
    const data=new Date()
    let hora = data.getHours()
    hora = hora<10 ? "0"+hora : hora
    let minuto = data.getMinutes()
    minuto = minuto<10 ? "0"+minuto : minuto
    let segundo = data.getSeconds()
    segundo = segundo<10 ? "0"+segundo : segundo
    const horaCompleta = hora+":"+minuto+":"+segundo
    relogio.innerHTML = horaCompleta
}

const intervalo = setInterval(rel,1000)
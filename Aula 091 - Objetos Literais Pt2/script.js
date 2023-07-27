const objetos = document.querySelector("#objetos")

const computador = {
    cpu:"",
    ram:"",
    HD:"",
    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD:${this.HD}`)
    }

}

computador['monitor']="22pol"
computador.placaVideo="rtx"
delete(computador.HD)

const c1 = Object.assign({},computador) //Clona o Objeto computador
c1.info()

const c2 = Object.create(computador)
c2.cpu = "i9"
c2.ram = "32gb"
c2.HD = "2tb"
c2.info()

const o1 = {obj1:'1'}
const o2 = {obj2:'2'}
const o3 = {obj3:'3'}
const o4 = Object.assign(o1,o2,o3) // Mesclou os 3 objetos
console.log(o4)

const computadores = [
    {
        cpu:"i9",
        ram:"64gb",
        HD:"2tb",
    },
        {
        cpu:"i5",
        ram:"16gb",
        HD:"1tb",
    },
        {
        cpu:"i3",
        ram:"8gb",
        HD:"500gb",
    }
]

computadores.forEach((c)=>{
    const div = document.createElement('div')
    div.innerHTML = c.cpu + "<br>" + c.ram + "<br>" + c.HD  
    div.setAttribute('class', 'computador')
    objetos.appendChild(div)
})

/*
computador.info()
console.log(computador)
objetos.innerHTML = JSON.stringify(computadores)
objetos.innerHTML = computador.cpu + " - " + computador.ram + " - " + computador.HD
*/
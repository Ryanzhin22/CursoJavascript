const objetos = document.querySelector("#objetos")

const computador = {
    cpu:"i9",
    ram:"64gb",
    HD:"2tb",
    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD:${this.HD}`)
    }

}

computador['monitor']="22pol"
computador.placaVideo="rtx"

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
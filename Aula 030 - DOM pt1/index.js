const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')
const c3 = document.getElementById('c3')
const c4 = document.getElementById('c4')
const c5 = document.getElementById('c5')
const c6 = document.getElementById('c6')

const arrayElementos = [c1,c2,c3,c4,c5,c6]

for(d of arrayElementos){
    d.innerHTML = 'Ryanzhin22'
}

arrayElementos.map((e)=>{
    console.log(e)
}) 

console.log(arrayElementos)
const olhos = [...document.querySelectorAll('.olho')]

let x = 0
let y = 0

window.addEventListener('mousemove',(evt)=>{
    x = evt.clientX
    y = evt.clientY

    const rot = Math.atan2(y,x) * 180/Math.PI

    olhos.forEach((o)=>{
        o.style.transform = "rotate("+rot+"deg)"
    })
})
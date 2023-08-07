/*
let a,b,c,d

//[a,b,c,d] = ["verde", "amarelo", "azul", "branco"]
({a,b,c,d} = {a: "verde", b: "amarelo", c: "azul", d: "branco"})
*/

/*
let numeros = [10,20,30,40]
let [a,b,c,d] = numeros
*/

/*
let a = 10;
let b = 20;

[a,b]=[b,a]

console.log(a)
console.log(b)
*/

let numeros = () => {
    return [10,20,30,40]
}

[a,b,c,d] = numeros()

console.log(a)
console.log(b)
console.log(c)
console.log(d)
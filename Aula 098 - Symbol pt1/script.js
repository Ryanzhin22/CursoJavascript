const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for("Ryan")
const s4 = Symbol.for("Ryan")

console.log(s1)
console.log(s2)

console.log(s3==s4) // É um identificador interno
console.log(typeof(s1))

console.log(Symbol.keyFor(s1))
console.log(Symbol.keyFor(s3))
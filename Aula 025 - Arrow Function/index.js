const soma = (n1,n2) => n1+n2
console.log(soma(10,4))

const nome = (p1) => p1
console.log(nome("Ryan"))

const val = (...valores) => {
    let res = 0
    for(v of valores){
        res+=v
    }
    return res
}
console.log(val(4,2,5,3,6,87,2))
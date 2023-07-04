const somar = (...valores) => {
    const soma = val => {
        let res = 0
        for(v of val){
            res+=v
        }
        return res
    }
    return soma(valores)
}
console.log(somar(10,5,15))
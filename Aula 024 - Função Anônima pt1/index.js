// diferente das funções normais ela não fica alocada na memória

const f = function(...valores){
    let res = 0
    for(v of valores){
        res+=v
    }
    return res
}
console.log(f(10,20,3,5))

const fn = new Function("v1", "v2", "v3", "return v1+v2+v3") // Função Construtor Anônima
console.log(fn(4,6,8))
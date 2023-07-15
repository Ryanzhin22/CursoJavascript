const Pessoa={
    nome: "Ryan",
    canal: "Ryanzhin",
    curso: "Javascript",
    aulas:{
        aula01:"Introdução",
        aula02:"Variáveis",
        aula03:"Condicional"
    }
}

const s_json_pessoa = JSON.stringify(Pessoa) // ESSE OBJETO VIROU A STRING ABAIXO PELO STRINGIFY
const string_pessoa = '{"nome":"Ryan","canal":"Ryanzhin","curso":"Javascript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

const o_json_pessoa = JSON.parse(s_json_pessoa) // CONVERTE A STRING EM OBJETO PELO PARSE
console.log(o_json_pessoa)

console.log(s_json_pessoa)
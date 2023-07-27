import { contatos } from "./bancoContatos.js";

let contato = {
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i){
        return contatos[i]
    },
    addContato:function(novoContato, destinoDom){
        const cont={
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email
        }
        contatos.push(cont)

        destinoDom.innerHTML = ""

        contatos.forEach((c)=>{
            
            const div = document.createElement('div')
            div.setAttribute('class', 'contato')

            const p_nome = document.createElement('p')
            p_nome.innerHTML = c.nome

            const p_telefone = document.createElement('p')
            p_telefone.innerHTML = c.telefone

            const p_email = document.createElement('p')
            p_email.innerHTML = c.email

            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            destinoDom.appendChild(div)

        })
    }
}

export default contato
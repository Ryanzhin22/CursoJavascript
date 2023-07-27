import getTodosCursos from "./cursos.js"; // O Default fica fora das chaves
//import {cursos as c, getCurso as gc} from './cursos.js'
import * as m_cursos from "./cursos.js"

console.log(m_cursos.cursos)
console.log(m_cursos.getCurso(0))
console.log(m_cursos.default())
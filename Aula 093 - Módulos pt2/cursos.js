const cursos = ["Javascript", "HTML", "CSS", "Arduino", "Raspberry", "C++", "Python", "Java", "C#"]

/*
const getTodosCursos = () => {
    return cursos
}
*/

export default function getTodosCursos(){ // Apenas um pode ser Default
    return cursos
}

function getCurso(i){
    return cursos[i]
}

export {cursos, getCurso}
import { isPromiseAlike } from 'q';
import cursosKalum from './data/cursos';

const buscarCursosPorId = (id) => cursosKalum.find((elemento) => elemento.id === id);

const promesa = new Promise((resolve,reject) => {
    setTimeout(() =>{
        const curso = buscarCursosPorId(2);
        reject('El curso no existe');
    }, 2000);
});

/*
promesa.then((data) => {
    console.log(data);
}).catch(error) => {
    console.log(error);
});
*/

buscarCurso(55)
    .then(console.log)
    .catch(console.warn);


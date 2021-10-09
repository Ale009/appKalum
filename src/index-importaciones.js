import cursosKalum, {instructoresKalum} from './data/cursos';

const buscarCursosPorId = (id) => cursosKalum.find((elemento) => elemento.id === id);

const buscarInstructorPorId = (id) => instructoresKalum.find((elemento) => elemento.id === id);
console.log(buscarCursosPorId(4));
console.log(buscarInstructorPorId(3));


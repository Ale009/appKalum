const { unstable_renderSubtreeIntoContainer } = require("react-dom");

//variables y constantes
const nombre ='Ale';
const apellido = 'Salazar';
//Variable
let edad = 45;

if (edad >= 18) {

    //console.log(`Hola ${nombre} ${apellido}, eres mayor de edad`)
} else {
    console.log(`Hola ${nombre} ${apellido}, eres menor de edad`)

}

//OBJETOS
const persona = {
    nombre: 'Ale',
    apellido: 'Salazar',
    edad: 45,
    direccion: {
        ciudad:'Guatemala',
        depto: 'Guatemala',
        municipio:'Guatemala',
        lat: 0,
        lng: 0
    }

}
const persona2 = {
    ...persona,
    puesto: 'Instructor',
    materias:5
}
persona2.nombre = 'Raul';
persona2.apellido = 'Perez'

console.table(persona2);

//UTILIZACIÓN DE ARREGLOS
/*const arreglo = new Array(5);

arreglo[0]= 10;
arreglo[1]= 100;
arreglo[2]= 1000;
arreglo[3]= 10000;
arreglo[4]= 100000;

const arreglo = new Array();
arreglo.push(10);
arreglo.push(100);
arreglo.push(1000);
arreglo.push(10000);
arreglo.push(100000);*/

/*
const arreglo = [10, 100, 1000, 10000];
//los 3 puntos sirven para agregar un arreglo en otro
const arreglo2 = [...arreglo, 100000, 10000000]

//MAP lee cada elemento para manipularlo
const arreglo3 = arreglo.map(function(elemento){
    return elemento * 3;

})
*/
/*
console.table(arreglo3);
*/

/*
//UTILIZACIÓN DE FUNCIONES

const saludar = function(nombre) {
    return `Hola ${nombre} bienvenida`;
}
//FUNCIÓN DE FLECHA
const saludar = (nombre) => {
    return `Hola ${nombre} bienvenida`
}
*/

const saludar = (nombre) => `Hola ${nombre} bienvenida`;
//console.log(saludar('Alejandra'));

const getUser = (nombre) => ({
        username: nombre,
        password: '12345'
});
//console.log(getUser());

//USO DE LA DESESTRUCTURACIÓN
const personax = {
    id:'12345',
    nombre:'Ale',
    apellido: 'Salazar',
    email: 'asa@gmail.com'
}
//const{id,email} = personax;
//console.log(id);
//console.log(email);

const callContext = ({id,email, clave='12345'}) => {
    return {
        username: email,
        password: `${id}-${clave}`,
        latlng:{
            lat: 14.234567,
            lng: 21.2334
        }
    }
}

const {username, password,latlng: {lat, lng}, } = callContext(personax);

console.log(`Credenciales: ${username} ${password} -> ${lat},${lng}`);

const personajes = ['Pato', 'Piolín', 'Coyote']
//se coloca comas que identifican la posición
const[,,p3] = personajes;
console.log(p3);


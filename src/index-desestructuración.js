const persona = {
    nombres:'Ale',
    apellido:'Salazar',
    email:'salazarale@hotmail.com'
}

const{email} = persona;
const imprimirDatos = ({nombres, apellidos}) => {
    return {
        nombreCompleto: `${apellidos} ${nombres}`,
        direccion: 'Guatemala, Guatemala',
        edad: 40
    }
}
console.log(imprimirDatos(persona));



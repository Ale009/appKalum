const activo = true;

if(activo === true){
    console.log('Está activo');
}else{
    console.log('Está desactivado');
}

//const mensaje = (activo) ? 'Está activo' : 'Está desactivado';
const mensaje = activo && 'Está activo';
console.log(mensaje);

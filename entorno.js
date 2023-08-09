// let saludo = 'hola';

// console.log(saludo);


//let nombre = process.env.NOMBRE

//console.log('Hola ' + nombre);


let nombre = process.env.NOMBRE || 'Sin nombre';

console.log('Hola ' + nombre);



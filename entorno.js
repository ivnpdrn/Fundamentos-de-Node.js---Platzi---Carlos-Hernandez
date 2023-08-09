// let saludo = 'hola';

// console.log(saludo);


//let nombre = process.env.NOMBRE

//console.log('Hola ' + nombre);


let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'no tengo web';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);



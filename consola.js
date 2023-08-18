// console.count('veces');
// console.count('veces');
// console.count('veces');
// console.countReset('veces');
// console.count('veces');

function function1() {
    console.group('function 1');
    console.log('Esto es de la funcion 1')
    console.log('Esto tambien');
    console.log('Esto tambien');
    function2();
    console.log('hemos vuelto a la funcion 1');
    console.groupEnd('function 1'); 
} 

function function2()  {
    console.group('function 2');
    console.log('ahora estamos en la funcion 2');
    console.groupEnd('function 2');
}

console.log('empezamos');
function1();











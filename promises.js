
function hola(nombre)  {
    return new Promise(function (resolve, reject) { setTimeout(function() {console.log('Hola, '+ nombre); resolve(nombre);}, 1500);});
    
    
    setTimeout(function()  {console.log('Hola, '+ nombre); miCallback(nombre);}, 1500);}



function hablar(callbackHablar) {setTimeout(function() {console.log('Bla bla bla bla...'); callbackHablar()});}



function adios (nombre) { return new Promise ((resolve, reject) => {setTimeout(function() {console.log('Adios ', nombre); resolve();}, 1000);});} 





// ---

console.log('Iniciando el proceso..');
hola('Carlos')
    .then(adios)
    .then((nombre) => {console.log('Terminado el proceso');})
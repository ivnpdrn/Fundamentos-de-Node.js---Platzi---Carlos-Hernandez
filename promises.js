
function hola(nombre)  {
    return new Promise(function (resolve, reject) { setTimeout(function() {console.log('Hola, '+ nombre); resolve(nombre);}, 1500);});
    
    
    setTimeout(function()  {console.log('Hola, '+ nombre); miCallback(nombre);}, 1500);}



function hablar(nombre) { return new Promise (( resolve, reject) => { setTimeout(function() {console.log('Bla bla bla bla...'); 
// resolve(nombre);
reject('Hay un error');
}, 1000); }); }



function adios (nombre) { return new Promise ((resolve, reject) => {setTimeout(function() {console.log('Adios ', nombre); resolve();}, 1000);});} 





// ---

console.log('Iniciando el proceso..');
hola('Carlos')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {console.log('Terminado el proceso');})

    .catch(error => {
        console.error('Ha habido un error:');
        console.error(error);

    }) // catch: asegurandose que todo lo que pasa aqui no falla, y en caso de que falle console.error('Ha habido un error:')

    // siempre que se use .then entonces usa .catch

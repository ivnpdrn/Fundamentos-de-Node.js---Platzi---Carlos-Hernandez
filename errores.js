
function otraFunction() {
    return serompe();
}




function serompe()  {
    return 3 + z;
}

function seRompeAsincrona(cb) { setTimeout(function()  {  
    try { return 3 + z;} 
    catch (err){console.error('Error en mi funcion asincrona'); cb(err);}})} // llega hasta aca y callback(err) porque falla el try

try {seRompeAsincrona(function(err) { console.log("finaliza aca " + err.message)});}  // todo se inica aca y termina aca por el callback por err
catch(err) {console.error('Vaya, algo se ha roto...'); console.error(err); console.log('Pero no pasa nada, lo hemos capturado');}

console.log('esto de aqui esta al final y se ejecuta despues de todo pero como es asincronico se muestra al principio porque lo demas tarda aunque empiezan primero');



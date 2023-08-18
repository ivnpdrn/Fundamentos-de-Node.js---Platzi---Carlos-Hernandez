
function otraFunction() {
    return serompe();
}




function serompe()  {
    return 3 + z;
}

function seRompeAsincrona() {
    setTimeout(function()   {    // seRompeAsincrona esta funcion llama a un Timeout que va a ejecutar una funcion asincrona: 
                                 // (function () {return 3 + z;}) y esta funcion asincrona, ya no esta dentro dentro del hilo pricipal
                                 // donde estamos ejecutando, esta en otro hilo,entonces no se detecta esa ruptura. Entonces matamos el proceso.  
        return 3 + z;

    })
}

try {
    //otraFunction();
    seRompeAsincrona();
}

catch(err) {
   console.error('Vaya, algo se ha roto...');
   console.error(err);  // cuentame lo que ha pasado, ahora mejor resumido
   console.log('Pero no pasa nada, lo hemos capturado');
 }

console.log('esto de aqui esta al final');

// no llega hasta esta ultima instruccion porque se rompe antes si no tiene el try/catch

function serompe()  {
    return 3 + z;
}

try {
    serompe();
}

catch(err) {
   console.error('Vaya, algo se ha roto...');
   console.error(err.message);  // cuentame lo que ha pasado, ahora mejor resumido
   console.log('Pero no pasa nada, lo hemos capturado');
 }

console.log('esto de aqui esta al final');

// no llega hasta esta ultima instruccion porque se rompe antes si no tiene el try/catch

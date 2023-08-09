function soyAsincrona(miCallback)  {
    
    setTimeout(function()  {
        console.log('Estoy siendo asincrona');
        miCallback();
    }, 1000);
}

    console.log('Iniciando proceso...');

    soyAsincrona(function() {
        console.log('Terminando proceso...');
    });

        







function hola(nombre, miCallback)  {setTimeout(function()  {console.log('Hola, '+ nombre); miCallback(nombre);}, 1500);}

// despues de esperar por el tiempo de setTimeout, se ejecuta la primera funcion y despues la segunda que en este caso es un Callback que se devuelve con el nombre a la instancia que le llamo, para ejecutar la funcion en el segundo argumento, el que espera los callback. 

function adios(nombre, otroCallback) {setTimeout(function() {console.log('Adios ', nombre); otroCallback();}, 1000);} 



    console.log('Iniciando proceso...');
    hola('Carlos', function(nombre) { adios(nombre, function() { console.log('Terminando proceso...');});});

    // primer argumento que llama la funcion es usado por esta. El segundo argumento esperara la ejecucion de la funcion llamada y se ejecutara si es una funcion de acuerdo al valor recibido. 

    //hola('Carlos', function () {});
    //adios('Carlos', function () {});

        




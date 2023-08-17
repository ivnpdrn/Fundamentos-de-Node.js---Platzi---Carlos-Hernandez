const fs = require('fs');

function leer (ruta, cb) {
    fs.readFile(ruta, (err, data) =>  {             
        cb(data.toString());
})
}

function escribir(ruta, contenido, cb)  {
    fs.writeFile(ruta, contenido, function (err)  {
        if (err) {
            console.error('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente');
        }
    });
}

function borrar (ruta, cb) { 
    fs.unlink(ruta, cb);
} // cb: el call back es para saber si se borro bien, o se borro al

//leer('archivo.txt',console.log)

// escribir('archivo1.txt', 'Soy un archivo nuevo', console.log);

borrar('archivo1.txt',console.log);

// en caso de que el archivo.txt or archivo.txt esta ubicado en un directorio diferente a file_system_fs.js: (__dirname + '/archivo1.txt, console.log)
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

//leer('archivo.txt',console.log)

escribir('archivo1.txt', 'Soy un archivo nuevo', console.log);


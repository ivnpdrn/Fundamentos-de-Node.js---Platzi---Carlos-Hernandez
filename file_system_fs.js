const fs = require('fs');

function leer (ruta, cb) {
    fs.readFile(ruta, (err, data) =>  {             
        console.log(data.toString());
})
}

//leer(__dirname + '/archivo.txt')
leer('archivo.txt')  // esta en el mismo directorio que file_system_fs.js


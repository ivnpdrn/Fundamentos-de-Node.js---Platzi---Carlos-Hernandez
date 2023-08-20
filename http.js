// Javascript: servidor creado

const http = require('http');

http.createServer(function (req, res) {
    console.log('Nueva peticion!');
    console.log(req.url);

    // Escribir respuesta al usuario
    res.write('Hola, ya se usar HTTP de NodeJS');

    res.end();
}).listen(3000);

console.log("Escuchando http en el puerto 3000");


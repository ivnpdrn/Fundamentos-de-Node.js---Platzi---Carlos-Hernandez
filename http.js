// Javascript: servidor creado

const http = require('http');

http.createServer(function (req, res) {
    console.log('Nueva peticion!');
    console.log(req.url);

    res.end();
}).listen(3000);

console.log("Escuchando http en el puerto 3000");


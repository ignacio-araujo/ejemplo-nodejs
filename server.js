// Importamos el módulo http
const http = require('http');
const url = require('url'); // Importamos el módulo 'url' para analizar la URL

// Creamos el servidor
const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const urlParseada = url.parse(req.url, true);
    const ruta = urlParseada.pathname; // Ruta como /api/...
    const query = urlParseada.query;   // Parámetros de consulta (query)


    if (ruta === '/api/holaMundo') {
        console.log("Petición recibida con parámetros: ", query)

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ mensaje: `Hola ${query.nombre} desde el servidor Node.js!` }));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('No encontrado');
    }
});

// El servidor escucha en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor corriendo en http://127.0.0.1:3000/');
});


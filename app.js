var express = require('express');
var app = express();


app.get('/', function(request, response) {
    response.send('Hola desde el servidor express ACTUALIZADO');
})

var user_routes = require('./routes/user');

 
app.use('/api',  //se coloca una primera direccion primero. en este caso /
    user_routes
)

module.exports = app;
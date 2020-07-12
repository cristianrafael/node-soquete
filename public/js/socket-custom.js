var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Los on son para escuchar información
socket.on('disconnect', function() {
    console.log('Se perdió la conexión con el servidor');
});

//Los emits son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Cristian',
    mensaje: 'Hola mundo'
}, function(response) {
    console.log('respuesta server: ', response);
});


socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});
const express=require('express')
const uws = require('uws');
var app = express();
// passa o express para o http-server
var http = require('http').Server(app);
// passa o http-server par ao socketio
var io = require('socket.io')(http);
app.use(express.static('.'))
// sempre que o socketio receber uma conexão vai devoltar realizar o broadcast dela
io.ws = new uws.Server({ perMessageDeflate: false });
io.on('connection', function(socket){   
  socket.on('chat message', function(msg){
    io.emit('connections',socket.server.eio.clientsCount  )  
    io.emit('chat message', msg);
  });
});
 // inicia o servidor na porta informada, no caso vamo iniciar na porta 3000
http.listen(3000, function(){
  console.log('Servidor rodando em: http://localhost:3000');
});
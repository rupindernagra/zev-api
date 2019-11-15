var app = require('./app');
var port = process.env.PORT || 3001;
var http = require('http');

var server = http.createServer(app);
var io = require('socket.io').listen(server);
require('./chat/index').initSocket(io)

server.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({ port:3000 });
server.ext('onRequest', function(request, reply) {
  console.log('Request recived: '+ request.path);
  reply.continue();
})
server.route({
  path: '/',
  method: 'GET',
  handler: {
    file: './public/index.html'
          } 
});
server.start(function() {
  console.log('Listening on' + server.info.uri);
})  
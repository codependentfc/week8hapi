var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 8000 });

// A set of example RESTful routes that could describe a blog


server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Blog homepage here');
    }
});

server.route({
    method: 'GET',
    path: '/{id}',
    handler: function (request, reply) {
        reply('Blog Post here, id: '+request.params.id);
    }
});

server.route({
    method: 'GET',
    path: '/edit',
    handler: function (request, reply) {
        reply('CMS page');
    }
});

server.route({
    method: 'GET',
    path: '/edit/{id}',
    handler: function (request, reply) {
        reply('CMS page with post' + request.params.id + 'loaded for editing');
    }
});

// payload output 'data' will read POST payload into memory. Can also be put in a file or made available as a stream
// payload parse 'true' is the default value, but worth knowing about. Uses the content-type header to parse the payload. set to false if you want the raw payload.
server.route({
    method: 'POST',
    config: { payload: {output: 'data', parse: true} },
    path: '/',
    handler: function (request, reply) {
        // code here to handle new post
        reply('New Post Added');
    }
});

// PUT has a payload too..
server.route({
    method: 'PUT',
    config: { payload: {output: 'data', parse: true} },
    path: '/{id}',
    handler: function (request, reply) {
        // code here to handle post update
        reply('Post '+request.params.id +' updated');
    }
});

server.route({
    method: 'DELETE',
    path: '/{id}',
    handler: function (request, reply) {
        // code here to delete post
        reply('Post '+request.params.id +' deleted');
    }
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});
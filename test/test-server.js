
var assert = require('chai').assert;

var server = require('../app/server');


describe('server', function() {
    it('should return Hello World at /', function() {
        server.requestHandler(
            {
                url: 'localhost:3001/'
            },
            {
                writeHead: function(status, headers) {
                    assert.equal(200, status);
                    assert.deepEqual({ 'Content-Type': 'text/html' }, headers);
                },
                end: function(data) {
                    assert.equal('<h1>Hello World!</h1>', data);
                },
            }
        );
    });
    
    it('should return a 404 /foo', function() {
        server.requestHandler(
            {
                url: 'localhost:3001/foo'
            },
            {
                writeHead: function(status, content) {
                    assert.equal(404, status);
                    assert.deepEqual('Not Found', content);
                },
                end: function(data) {
                    assert.equal('Not Found', data);
                },
            }
        );
    });
});

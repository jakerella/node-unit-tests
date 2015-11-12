

var assert = require('chai').assert;

var translate = require('../app/text');


describe('text module', function() {
    it('should return correct translations from a file', function( done ) {
        
        translate( __dirname + '/phrases.json', 'es', function(err, data) {
            
            if (err) { return done( err ); }
            
            assert.equal( data.length, 3 );
            assert.deepEqual( data, ['hola', 'cervesa', 'I like beer']  );
            
            done();
            
        } );
        
    });
});

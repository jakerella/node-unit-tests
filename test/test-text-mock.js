
var assert = require('chai').assert;


describe('text module with mock', function() {
    
    require('../app/i18n');
    
    var i18nOriginal;
    
    beforeEach(function() {
        i18nOriginal = require.cache[ require.resolve('../app/i18n') ].exports;
        
        require.cache[ require.resolve('../app/i18n') ].exports = function() {
            return 'foo'
        };
    });

    afterEach(function() {
        
        require.cache[ require.resolve('../app/i18n') ].exports = i18nOriginal;
        
    });
    
    
    it('should return correct translations from a file', function( done ) {
        
        var translate = require('../app/text');
        
        translate( __dirname + '/phrases.json', 'es', function(err, data) {
            
            if (err) { return done( err ); }
            
            assert.equal( data.length, 3 );
            assert.deepEqual( data, ['foo', 'foo', 'foo']  );
            
            done();
            
        } );
        
    });
});

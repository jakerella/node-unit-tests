

var assert = require('chai').assert;

var i18n = require('../app/i18n');


describe('i18n', function() {
    it('should return correct translation if available', function() {
        
        assert( i18n('hello'), 'hello' );
        assert( i18n('hello', 'en'), 'hello' );
        assert( i18n('hello', 'es'), 'hola' );
        assert( i18n('beer', 'es'), 'cervesa' );
        
    });
    
    it('should return the input on a missing phrase', function() {
        
        assert.equal( i18n('foobar'), 'foobar' );
        assert.equal( i18n('foobar', 'es'), 'foobar' );
        assert.equal( i18n('beer', 'jp'), 'beer' );
        
    });
    
    it('should handle mixed case', function() {
        
        assert.equal(i18n('Beer'), 'cervesa');
        
    });
});

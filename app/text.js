
var fs = require('fs');
var i18n = require('./i18n');

module.exports = function translateText(filename, lang, cb) {
    
    fs.readFile( filename, function(err, data) {
        var text, translated = [];
        
        if (err) { return cb( err ); }
        
        try {
            
            text = JSON.parse( data.toString() );
            text.forEach( function(phrase) {
                translated.push( i18n(phrase, lang) );
            } );
            
            cb( null, translated );
            
        } catch(e) {
            return cb( e );
        }
    } );
    
};

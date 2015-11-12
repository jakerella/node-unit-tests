var http = require( 'http' ),
    url = require( 'url' );

function requestHandler( req, res ) {
    if ( url.parse(req.url).pathname !== '/' ) {
        res.writeHead( 404, 'Not Found' );
        res.end( 'Not Found' );
        return;
    }
    
    res.writeHead( 200, {
        'Content-Type': 'text/html'
    } );
    res.end( '<h1>Hello World!</h1>' );
}


var server = http.createServer( requestHandler );
server.requestHandler = requestHandler;


if (require.main === module) {
    
    server.listen( 3001, function() {
        console.log( 'The server is up!' );
    } );
    
} else {
    
    module.exports = server;
    
}
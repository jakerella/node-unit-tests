

var assert = require('chai').assert;

describe('team module', function() {
    var team;
    
    beforeEach(function() {
        team = require('../app/team')({
            User: {
                find: function(team, cb) {
                    cb(null, [ 'Superman', 'Batman', 'Flash' ]);
                }
            }
        });
    });
    
    it('should return members from mock', function( done ) {
        
        team.findMembers( 'justice-league', function(err, data) {
            
            if (err) { return done( err ); }
            
            assert.equal( data.length, 3 );
            assert.deepEqual( data, ['Superman', 'Batman', 'Flash']  );
            
            done();
            
        } );
        
    });
});

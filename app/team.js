
module.exports = function teamModule( options ) {
    options = options || {};
    
    if (!options.User) {
        options.User = require('./lib/User');
    }
    
    return {
        findMembers: function(team, cb) {
        
            options.User.find(
                { where: { team: team } },
                function(err, results) {
                    if (err) { return cb(err); }
                    
                    cb(null, results);
                }
            );
            
        }
    };
};

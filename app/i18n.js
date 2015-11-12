
var mapping = {
    'hello': {
        'en': 'hello',
        'es': 'hola'
    },
    'beer': {
        'en': 'beer',
        'es': 'cervesa'
    }
};

module.exports = function translate(phrase, lang) {
    var phraseMap = mapping[phrase];
    
    if (!phraseMap) {
        return phrase;
    }
    
    return phraseMap[lang] || phrase;
};

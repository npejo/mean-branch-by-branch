'use strict';

var path = require('path');

module.exports = {
    root: path.normalize(__dirname + '/../../..'),

    // The secret should be set to a non-guessable string that
    // is used to compute a session hash
    sessionSecret: 'QOOKIESECRET!@#$#@%$#%#%$#',

    // The name of the MongoDB collection to store sessions in
    sessionCollection: 'sessions'
};

'use strict';

/**
 * Middleware for checking if user is correctly authenticated for API requests
 * To check if it works play manually with the value of authenticated variable,
 * no authentication strategy implemented yet
 */
exports.checkAuthenticated = function (req, res, next) {
    var authenticated = false;
    if (authenticated) return next();
    res.json(401, 'Unauthorized');
};

/**
 * Middleware for checking if user is correctly authenticated for request that come from public site
 * To check if it works play manually with the value of authenticated variable,
 * no authentication strategy implemented yet.
 */
exports.redirectNotAuthenticated = function(req, res, next) {
    var authenticated = true;
    if (authenticated) return next();
    res.redirect('/');
};
(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const signupRoutes = require('../routes/signup');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/signup', signupRoutes);

  };

})(module.exports);

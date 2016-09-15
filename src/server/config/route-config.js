(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const signupRoutes = require('../routes/signup');
    const signinRoutes = require('../routes/signin');
    const restaurantRoutes = require('../routes/restaurants');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/signup', signupRoutes);
    app.use('/signin', signinRoutes);
    app.use('/restaurants', restaurantRoutes);
  };

})(module.exports);

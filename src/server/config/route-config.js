(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const signupRoutes = require('../routes/signup');
    const restaurantRoutes = require('../routes/restaurants');
    const loginRoutes = require('../routes/login');
    const userRoutes = require('../routes/user');
    const commentRoutes = require('../routes/comments');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/signup', signupRoutes);
    app.use('/restaurants', restaurantRoutes);
    app.use('/comments', commentRoutes);
    app.use('/login', loginRoutes);
    app.use('/user', userRoutes);
  };

})(module.exports);

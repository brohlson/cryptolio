module.exports = function(app){
    
            // Our model controllers (rather than routes)
            var dashboard = require('./routes/dashboard');
            var portfolio = require('./routes/portfolio');
            var settings = require('./routes/settings');
            var profile = require('./routes/profile');
            var login = require('./routes/login');
    
            app.use('/', dashboard);
            app.use('/login', login);
            // app.use('/portfolio', portfolio);
            // app.use('/profile', profile);
            // app.use('/settings', settings);
            //other routes..
    }
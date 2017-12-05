module.exports = function(app){
    
            // Our model controllers (rather than routes)
            var dashboard = require('./routes/dashboard');
            var portfolio = require('./routes/portfolio');
            var settings = require('./routes/settings');
            var profile = require('./routes/profile');
    
            app.use('/', dashboard);
            // app.use('/portfolio', portfolio);
            // app.use('/profile', profile);
            // app.use('/settings', settings);
            //other routes..
    }
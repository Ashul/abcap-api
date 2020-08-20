const user = require('./user_routes');
// const clinic = require('./clinic_routes');

module.exports = function(app){
    app.use('/api/user', user)
    // app.use('/api/clinic', clinic)
}

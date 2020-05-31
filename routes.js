const routes = require('next-routes')();

routes
    .add('/documents/new','/documents/new')
    .add('/documents/:address','/documents/show')
    .add('/documents/my/:address','/documents/my/created')
    .add('/documents/my/received/:address','/documents/my/received')    
    .add('/documents/:address/versions','/documents/versions/index')    
    .add('/users/allUsers/:address','/users/allUsers')
    .add('/users/profile/:address','users/profile');

module.exports = routes;

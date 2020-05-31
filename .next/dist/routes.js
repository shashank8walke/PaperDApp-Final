'use strict';

var routes = require('next-routes')();

routes.add('/documents/new', '/documents/new').add('/documents/:address', '/documents/show').add('/documents/my/:address', '/documents/my/created').add('/documents/my/received/:address', '/documents/my/received').add('/documents/:address/versions', '/documents/versions/index').add('/users/allUsers/:address', '/users/allUsers').add('/users/profile/:address', 'users/profile');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGtCQUMwQixBQUQxQixrQkFFSyxBQUZMLElBRVMsQUFGVCx1QkFFK0IsQUFGL0IsbUJBR0ssQUFITCxJQUdTLEFBSFQsMEJBR2tDLEFBSGxDLHlCQUlLLEFBSkwsSUFJUyxBQUpULG1DQUkyQyxBQUozQywwQkFLSyxBQUxMLElBS1MsQUFMVCxnQ0FLd0MsQUFMeEMsNkJBTUssQUFOTCxJQU1TLEFBTlQsNEJBTW9DLEFBTnBDLG1CQU9LLEFBUEwsSUFPUyxBQVBULDJCQU9tQyxBQVBuQzs7QUFTQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L2FjbS9wYXBlckRBcHAtbWFzdGVyL3BhcGVyREFwcC1tYXN0ZXIifQ==
var users = require('./../server/controllers/users.js');
var orders = require('./../server/controllers/orders.js');
var products = require('./../server/controllers/products.js');

module.exports = function Routes(app, io){
    // Calling Users Controller
    app.get('/', function(req,res) {
        users.index(req,res)
    });
    app.get('/users/index.json', function(req,res){
        users.index_json(req,res)
    });
    app.post('/users/create', function(req,res){
        users.create(req,res)
    });
    app.post('/users/delete', function(req,res){
        users.destroy(req,res);
    });
    // Calling Orders Controller
    app.get('/orders/index.json', function(req,res){
        orders.index_json(req,res);
    })
    app.post('/orders/create', function(req,res){
        orders.create(req,res);
    })
    // Calling Products Controller
    app.get('/products/index.json', function(req,res){
        products.index_json(req,res);
    })
    app.post('/products/create',function(req,res){
        products.create(req,res);
    })
};

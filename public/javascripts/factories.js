// productFactory
myApp.factory('productFactory',function($http){
    var products = [];
    var factory = {};

    factory.getProducts = function(callback){
        $http.get('/products/index.json').success(function(output){
            products = output;
            callback(output);
        })
    };

    factory.addProduct = function(new_product, callback){
        $http.post('/products/create', new_product).success(function(output){
            products.push(output);
        })
    }
    return factory;
})

// orderFactory
myApp.factory('orderFactory', function($http){
    var orders = [];
    var factory = {};

    factory.getOrders = function(callback){
        $http.get('/orders/index.json').success(function(output){
            orders = output;
            callback(output)
        })
    }

    factory.addOrder = function(new_order, callback){
        var this_order = {};
        this_order.customer_name = new_order.customer_name.name;
        this_order.quantity = Number(new_order.quantity);
        this_order.product_name = new_order.product_name.name;
        if (this_order.customer_name == null || this_order.quantity == "" || this_order.product_name == null){
            return "All fields must be selected"
        }
        console.log(this_order);
        $http.post('/orders/create', this_order).success(function(output){
            orders.push(output);
        });
    }
    return factory;
});

// customerFactory
myApp.factory('customerFactory', function($http){
    var customers = [];
    var factory = {};

    factory.getCustomers = function(callback){
        $http.get('/users/index.json').success(function(output){
            customers = output;
            callback(output);
        });
    }

    factory.addCustomer = function(new_customer, callback) {
        for(i in customers) {
            if(customers[i]['name'] == new_customer) {
                return "The user already exists";
            }
        }
        if(new_customer == '') {
            return "Write something";
        }

        var data = {name: new_customer};

        $http.post('/users/create', data).success(function(output){
            customers.push(output);
        });
    }

    factory.removeCustomer = function(index) {
        customer_name = customers[index]['name'];
        var data = {name: customer_name};

        $http.post('/users/delete', data).success(function(output){
            customers.splice(index,1);
        });
    }
    return factory;
});

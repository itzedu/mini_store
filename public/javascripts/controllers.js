// Products Controller
myApp.controller('ProductsController',function($scope, productFactory){

    productFactory.getProducts(function(data){
        $scope.products = data;
    });
    $scope.addProduct = function(){
        productFactory.addProduct($scope.newProduct);
    }
});

// Customers Controller
myApp.controller('CustomersController', function($scope, customerFactory){
    $scope.errors = "";

    customerFactory.getCustomers(function(data){
        $scope.customers = data;
    });

    $scope.addCustomer = function(){
        $scope.errors = customerFactory.addCustomer($scope.newCustomer.name);
    };
    $scope.removeCustomer = function($index){
        customerFactory.removeCustomer($index);
    };
});

// Orders Controller
myApp.controller('OrdersController', function($scope, customerFactory, orderFactory, productFactory){
    $scope.errors2 = "";
    customerFactory.getCustomers(function(data){
        $scope.customers = data;
    });
    productFactory.getProducts(function(data){
        $scope.products = data;
    });
    orderFactory.getOrders(function(data){
        $scope.orders = data;
    });
    $scope.addOrder = function(){
        $scope.errors2 = orderFactory.addOrder($scope.newOrder);
    };
});

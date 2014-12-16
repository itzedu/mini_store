var myApp = angular.module('myApp', ['ngRoute']);

    myApp.config(function($routeProvider){
        $routeProvider
            .when('/',
            {
                templateUrl: './../views/partials/dashboards.html'
            })
            .when('/customers',
            {
                templateUrl: './../views/partials/customers.html'
            })
            .when('/orders',
            {
                templateUrl: './../views/partials/orders.html'
            })
            .when('/products',
            {
                templateUrl: './../views/partials/products.html'
            })
            .otherwise(
            {
                redirectTo: '/'
            });
    });

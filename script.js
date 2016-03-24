// create the module and name it scotchApp
    var myApp = angular.module('myApp', ['ngRoute']);

    // configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })

            .when('/USA', {
                templateUrl : 'USA.html',
                controller  : 'USAController'
            })

            .when('/Maldives', {
                templateUrl : 'Maldives.html',
                controller  : 'MaldivesController'
            })

            .when('/France', {
                templateUrl : 'France.html',
                controller  : 'FranceController'
            })
    });

    // create the controller and inject Angular's $scope
    myApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Follow the links in the nav bar for more information.' ;
        $scope.image ='RealEstateHome.jpg';
    });

    myApp.controller('FranceController', function($scope) {
        $scope.message = 'Experience Europe with this pretty palace in the French Riviera, France.';
        $scope.image ='estate1.jpg';
    });

    myApp.controller('USAController', function($scope) {
        $scope.message = 'Amazing property in sunny beach, California.';
        $scope.image ='estate3.jpg';
    });

    myApp.controller('MaldivesController', function($scope) {
        $scope.message = 'Heaven is here! Do not miss this amazing resort in Male, Maldives.';
        $scope.image ='estate2.jpg';
    });

                
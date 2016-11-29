/**
 * Created by Przemek on 2016-10-27.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($routeProvider){
        $routeProvider
            .when("/", {
                templateUrl: 'views/intro.html',
                controller: 'MainController'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutController'
            })
            .when('/portfolio', {
                templateUrl: 'views/portfolio.html',
                controller: 'PortfolioController'
            })
            .when('/testimonials', {
                templateUrl: 'views/testimonials.html'
            })
            .when('/hire', {
                templateUrl: 'views/hire.html',
                controller: 'ContactController'
            })
            .otherwise({
                templateUrl: 'views/intro.html'
            })
    }

})();
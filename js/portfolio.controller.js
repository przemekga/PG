/**
 * Created by Przemek on 2016-11-23.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('PortfolioController', ['$scope', PortfolioController]);

    function PortfolioController($scope){
        $scope.pageClass = 'page-portfolio';
    }
})();
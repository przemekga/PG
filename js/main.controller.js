/**
 * Created by Przemek on 2016-11-23.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', ['$scope', MainController]);

    function MainController($scope){
        $scope.pageClass = 'page-home';
    }
})();
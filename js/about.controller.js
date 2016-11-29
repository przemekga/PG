/**
 * Created by Przemek on 2016-11-23.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('AboutController', ['$scope', AboutController]);

    function AboutController($scope){
        $scope.pageClass = 'page-about';
    }
})();
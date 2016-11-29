/**
 * Created by Przemek on 2016-11-29.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('ContactController', ['$scope', ContactController]);

    function ContactController($scope){
        $scope.pageClass = 'page-contact';
    }
})();
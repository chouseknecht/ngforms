
'use strict';

angular.module('ngForms', [])
    .controller('MainCtrl', ['$scope', function($scope) {
        $scope.validateForm = function() {
            console.log($scope.profile);
        };
    }]);
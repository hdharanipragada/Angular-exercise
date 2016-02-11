'use strict';

/**
 * @ngdoc function
 * @name angularexerciseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularexerciseApp
 */
angular.module('angularexerciseApp')
  .controller('MainCtrl', function ($scope) {
   $scope.fnToggleDiv=function(){
    $('#toggleicon span').toggleclass('glyphicon glyphicon-chevron-right glyphicon glyphicon-chevron-left');
}
  });

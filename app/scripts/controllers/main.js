'use strict';

angular.module('ldtApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tareas = [];
    $scope.addTarea = function(){
    	$scope.tareas.push($scope.tarea);
    	$scope.tarea = '';
    };
    $scope.eliminarTarea = function (index) {
    	$scope.tareas.splice(index, 1);
    };
  });


	(funtion () {
	'use strict';
	
	angular.module('AngularJSTestApp',[])
	.controller('TestController', function ($scope) {
		$scope.name = "Ramik";
		$scope.sayHello = function (){
			return "Hello!";
		};
	});
	
})();
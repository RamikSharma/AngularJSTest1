//(funtion () {
//	'use strict';
	
	angular.module('AngularJSTestApp',[])
	.controller('TestController', function ($scope) {
		$scope.name = "";
		$scope.sayHello = function (){
			return "Hello,";
		};
	});
	
//})();
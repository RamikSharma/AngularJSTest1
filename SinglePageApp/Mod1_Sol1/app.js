//(funtion () {
// 'use strict';
// *** Getting error whenever I uncomment IIFE, so commented it for submitting and adding here notes for reviewer ***
	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);
		LunchCheckController.$inject = ['$scope'];
		function LunchCheckController ($scope)
	{
		$scope.dishname = "";	
		$scope.CheckDish = function()
		{
				//var Name = $scope.dishname;
				var SplittedMessage = $scope.dishname.split(",");
				var X = SplittedMessage.length;
				console.log(X)
				
						if (X == 0 || $scope.dishname == "") {
									$scope.DisplayMessage = "Please enter data first";
								}
						else if (X < 3 || X == 3) 	{
											$scope.DisplayMessage = "Enjoy!";
											}
						else 	{
									$scope.DisplayMessage = "Too Much!";
								}
			
			}
		};
//})();
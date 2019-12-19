var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
	$scope.firstName = "Kyi";
	$scope.lastName = "Min Han";
	$scope.fullName = function() {
		return $scope.firstName + ' ' + $scope.lastName;
	};
});

app.controller('namesCtrl', function($scope) {
	  $scope.names = [
	    {name:'Jani',country:'Norway'},
	    {name:'Hege',country:'Sweden'},
	    {name:'Kai',country:'Denmark'}
	  ];
	});
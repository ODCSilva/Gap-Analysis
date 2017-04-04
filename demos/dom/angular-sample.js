var app = angular.module('domDemo', [])
.controller('PersonController', function ($scope, $http) {
	$http.get('http://localhost:3000/people')
	.then(function (response) {
		$scope.people = response.data;
	});
});

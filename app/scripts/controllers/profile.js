'use strict';

angular.module('personalSiteApp.profile', ['ngRoute'])
.controller('ProfileController', ["$scope", "$http", function($scope, $http) {
    $http.get('https://us.api.battle.net/wow/guild/Tichondrius/Seriously%20Brutal?fields=members&locale=en_US&apikey=u2d8h5gkuwtvkegr3wxzcqct85uq48z9')
    .then(
    	function(response){
    		$scope.profileData = {};
	        $scope.profileData.name = response.data.name;
	        $scope.profileData.email = response.data.achievementPoints;
	        console.log("SUCCESS");
	        console.log(response);
	    },
	    function(response){
	        //$scope.profileData = response;
	        console.log("FAILED");
	        console.log(response);
	    }
	);
}]);
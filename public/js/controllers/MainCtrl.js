angular.module('MainCtrl', [])
    .controller('MainController', function($scope, $http) {

        $http.get('/results')
            .success(function(data) {
                //console.log("it worked")
                //console.log(data);
                $scope.info = data;
            })
            .error(function(data) {
                $scope.greeting = data;
                //console.log($scope.greeting);
                //console.log('Error '+data);
            });

	$scope.tagline = 'To the moon and back!';	

});

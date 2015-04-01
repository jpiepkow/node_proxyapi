angular.module('MainCtrl', [])
    .factory('myService', function() {
        var savedData = {}
        function set(data) {
            savedData = data;
        }
        function get() {
            return savedData;
        }

        return {
            set: set,
            get: get
        }

    })
    .controller('MainController', function($scope, $http, myService) {
        $scope.getFunction = function(id) {
            myService.set(id);
        };
        $http.get('/results')
            .success(function(data) {

                $scope.info = data;
            })
            .error(function(data) {
                $scope.greeting = data;

            });



})
.controller('SController', function($scope, $http ,myService) {
        $scope.id = myService.get();
        var id = $scope.id;

        $http.get('/results/user/' + id)
            .success(function(data) {


                $scope.info = data;
            })
            .error(function(data) {
                $scope.greeting = data;

            });

    $scope.tagline = 'To the moon and back!';

});

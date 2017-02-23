//CONTROLLERS
myWeatherApp.controller('mainController',['$scope',  '$location', 'serviceCity', function($scope, $location, serviceCity){  
    $scope.city = serviceCity.city;
    $scope.$watch('city', function(){
       serviceCity.city = $scope.city; 
    });
    
    $scope.submit = function(){
        $location.path("/second");
    }
    
}]);

myWeatherApp.controller('secondController',['$scope', '$routeParams', 'serviceCity', 'weatherService', function($scope,$routeParams, serviceCity, weatherService){
   $scope.city = serviceCity.city;
    $scope.days = $routeParams.days || '2';
      $scope.$watch('city', function(){
       serviceCity.city = $scope.city; 
    });
    
    
    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);
    
   
    
    $scope.convertToFahrenheit = function(degk){
        return Math.round((1.8 * (degk - 273)) + 32);
    }
    
    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);
    }
    
    console.log($scope.weatherResult);
   
}]);

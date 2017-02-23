//DIRECTIVES
myWeatherApp.directive('forcast', function(){
    return{
        restrict:'E',
        templateUrl:'directives/forcast.html',
        replace: true,
        scope: {
            weatherDay:"=",
            convertToFahrenheit: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
        
    }
});
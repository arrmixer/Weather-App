//SERVICES
myWeatherApp.service('serviceCity', function(){
//    self = this;
    this.city = 'Miami, FL';
//    this.showCity = function(){
//        return self.city;
//    }
    
    
});

myWeatherApp.service('weatherService', ['$resource',function($resource){
    
    this.getWeather = function(city, days)
{var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?&APPID=b02ecbb97a1be0414c0f8ebb40c77c25",{
        callback: "JSON_CALLBACK"
    }, {
        get: {
            method: "JSONP"
        }
    });
    
  
   
   return weatherAPI.get({
        q: city, cnt: days
    });
}
}]);
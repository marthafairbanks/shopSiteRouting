(function() {
    'use strict';
    
    angular
    .module('shopSiteRouting')
	.directive('weather', function (weatherFactory) {
	  return {
	    restrict: 'E',
	    templateUrl:"./views/partials/weather.html",
	    link: function (scope, element, attrs) { 


	      var city = attrs.city;

	      //api's give you back a promise this is how you handle it
	      var data = weatherFactory.getWeather(city);

	      data.then(function(response) {
	      	scope.data = response.data;
	      	console.log(response);
	      	

	      	var weatherCode = scope.data.weather[0].id;
	      	if (weatherCode >=200 && weatherCode<=299) {
	      		var weatherImage = "thunderstorms.png";
	      	}
	      	else if (weatherCode >=300 && weatherCode<=599) {
	      		var weatherImage = "rain.png";
	      	}
	      	else if (weatherCode >=600 && weatherCode<=699) {
	      		var weatherImage = "snow.png";
	      	}
	      	else if (weatherCode == 800) {
	      		var weatherImage = "clearskys.png";
	      	}
	      	else { 
	      		var weatherImage = "cloudy.png";
	      	}
	      	
			console.log(weatherImage);
			scope.image = weatherImage;	 

	      });



	    }
	  };

	});
})();

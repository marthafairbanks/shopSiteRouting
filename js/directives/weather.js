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

	      var data = weatherFactory.getWeather(city);

	      data.then(function(response) {
	      	scope.data = response.data;
	      	console.log(response);
	      });

	    }
	  };

	});
})();

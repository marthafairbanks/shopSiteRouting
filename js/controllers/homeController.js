(function() {
    'use strict';
    angular.module('shopSiteRouting').controller('HomeController', 
    function (mainFactory) {

    	var vm = this;

    	var featured = {
    		name: "Spunky",
    		price: 40,
    		imageUrl:"",  
    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
    	};
        
    	vm.data = [featured];
    });


})();
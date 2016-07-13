(function () {
	'use strict';
	angular.module('shopSiteRouting').factory('mainFactory', function() {

		
		function getCritters() {
			var detail1 = {
				id: 0,
    			name: "Spunky",
    			price: 40,
    			category: 1,
    			imageUrl:"../../../images/spunky.jpg",  
    			description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
    		};

	    	var detail2 = {
	    		id: 1,
	    		name: "Jupiter",
	    		price: 25,
	    		category: 2,
	    		imageUrl:"../../../images/jupiter.jpg",  
	    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
	    	};

	    	var detail3 = {
	    		id: 2,
	    		name: "Piper",
	    		price: 12,
	    		category: 3,
	    		imageUrl:"../../../images/piper.jpg",  
	    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
	    	};

	    	var detail4 = {
	    		id: 3,
	    		name: "Greg",
	    		price: 50,
	    		category: 3,
	    		imageUrl:"../../../images/greg.jpg",  
	    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
	    	};

	    	var detail5 = {
	    		id: 4,
	    		name: "Thumper",
	    		price: 23,
	    		category: 4,
	    		imageUrl:"../../../images/squirrel.jpg",  
	    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
	    	};

	    	var detail6 = {
	    		id: 5,
	    		name: "Rocko",
	    		price: 42,
	    		category: 4,
	    		imageUrl:"../../../images/rocko.jpg",  
	    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
	    	};

	    	var data = [detail1, detail2, detail3, detail4, detail5, detail6];
	    	return data;
		}

	return {
		getCritters:getCritters,
	};
		 	

		 });
})();
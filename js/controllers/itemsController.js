(function() {
    'use strict';
    angular.module('shopSiteRouting').controller('ItemsController', 
    function(mainFactory) {

    	var vm = this;

    	var item1 = {
    		name: "Spunky",
    		price: 40,
    		imageUrl:"",  
    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
    	};

    	var item2 = {
    		name: "Jupiter",
    		price: 25,
    		imageUrl:"",  
    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
        };

    	var item3 = {
    		name: "Piper",
    		price: 12,
    		imageUrl:"",  
    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
    	};

    	var item4 = {
    		name: "Greg",
    		price: 50,
    		imageUrl:"",  
    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
    	};

    	var item5 = {
    		name: "Thumper",
    		price: 23,
    		imageUrl:"",  
    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
    	};

    	var item6 = {
    		name: "Rocko",
    		price: 42,
    		imageUrl:"",  
    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
    	};

    	vm.data = [item1, item2, item3, item4, item5, item6];

    });


})();
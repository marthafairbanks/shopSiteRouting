(function() {
    'use strict';
    angular.module('shopSiteRouting').controller('DetailsController', 
    function(mainFactory) {

    	var vm = this;

    	var detail1 = {
    		name: "Spunky",
    		price: 40,
    		imageUrl:"",  
    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
    	};

    	var detail2 = {
    		name: "Jupiter",
    		price: 25,
    		imageUrl:"",  
    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
    	};

    	var detail3 = {
    		name: "Piper",
    		price: 12,
    		imageUrl:"",  
    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
    	};

    	var detail4 = {
    		name: "Greg",
    		price: 50,
    		imageUrl:"",  
    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
    	};

    	var detail5 = {
    		name: "Thumper",
    		price: 23,
    		imageUrl:"",  
    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
    	};

    	var detail6 = {
    		name: "Rocko",
    		price: 42,
    		imageUrl:"",  
    		description: "Squirty cheese parmesan mozzarella. Cheese strings halloumi say cheese cauliflower cheese mozzarella caerphilly smelly cheese caerphilly. Halloumi goat squirty cheese babybel everyone loves who moved my cheese queso fromage. Hard cheese.",
    	};

    	vm.data = [detail1, detail2, detail3, detail4, detail5, detail6];

        vm.items = [];

    });


})();
(function() {
    'use strict';
    angular.module('shopSiteRouting').controller('CategoriesController', 
    function(mainFactory) {

    	var vm = this;
    	
    	var category1 = {
	       	name: "Otters",
	       	imageUrl: "",
	       };

	       var category2 = {
	       	name:"Skunks",
	       	imageUrl: "",
	       };

	       var category3 = {
	       	name:"Raccoons",
	       	imageUrl: "",
	       };

	       var category4 = {
	       	name: "Squirrels",
	       	imageUrl: "",
	       };

	       vm.data = [category1, category2, category3, category4];

    });


})();
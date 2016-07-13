(function() {
    'use strict';
    angular.module('shopSiteRouting').controller('CategoriesController', 
    function(mainFactory, $stateParams) {

    	var vm = this;
    	
    	var category1 = {
	       	name: "Otters",
	       	imageUrl: "../images/otter.jpg",
	       	id: 1,
	       };

	       var category2 = {
	       	name:"Skunks",
	       	imageUrl: "../images/skunk.jpg",
	       	id: 2,
	       };

	       var category3 = {
	       	name:"Raccoons",
	       	imageUrl: "../images/raccoon.jpg",
	       	id: 3,
	       };

	       var category4 = {
	       	name: "Squirrels",
	       	imageUrl: "../images/squirrel.jpg",
	       	id: 4,
	       };

	       vm.data = [category1, category2, category3, category4];

    });


})();
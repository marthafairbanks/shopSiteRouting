(function() {
    'use strict';
    angular.module('shopSiteRouting').controller('ItemsController', 
    function(mainFactory, $stateParams) {

    	var vm = this;
        
        var data = mainFactory.getCritters();

        vm.data = data;        

    	
    });


})();
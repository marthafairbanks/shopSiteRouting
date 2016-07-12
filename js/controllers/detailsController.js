(function() {
    'use strict';
    angular.module('shopSiteRouting').controller('DetailsController', 
    function(mainFactory, $stateParams) {

    	var vm = this;

        var data = mainFactory.getCritters();

        vm.item = data[$stateParams.item];


    });


})();
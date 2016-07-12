(function() {
    'use strict';
    angular.module('shopSiteRouting').controller('HomeController', 
    function (mainFactory, $stateParams) {

    	var vm = this;

        var data = mainFactory.getCritters();

        var random = Math.floor(Math.random() * data.length);

        vm.data = data[random];

    });


})();
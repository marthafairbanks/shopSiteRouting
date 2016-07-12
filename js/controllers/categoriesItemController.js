(function() {
    'use strict';
    angular.module('shopSiteRouting').controller('HomeController', 
    function (mainFactory, $stateParams) {

    	var vm = this;
        
        var categoryId = $stateParams.catid;


        var data = mainFactory.getCritters();

        var array = [];

        data.forEach(function(critter){
            if(critter.category == categoryId) {
                array.push(critter);
            }
       });

       vm.data = array;
       

    });


})();
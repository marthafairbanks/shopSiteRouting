(function() {
    'use strict';
    angular
        .module('shopSiteRouting', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {

	  	$urlRouterProvider.otherwise("/");

	  	$stateProvider
	     .state('header', {
      	url: '/',
      	views: {
      		'main': {
		        templateUrl: '../views/header.html',
		      },
		      'nav': {
		        templateUrl: '../views/partials/nav.html',
		      },
		  },
	    })
	    .state('home', {
      	url: '/',
      	views: {
      		'main': {
		        templateUrl: '../views/home.html',
		        controller: 'MainController',
		        controllerAs: 'main'
		      },
		  },
	    })
	    .state('contact', {
      	url: '/contact',
      	views: {
      		'main': {
		        templateUrl: '../views/contact.html',
		      },
		      'nav': {
		        templateUrl: '../views/contact-nav.html',
		      },
		  },
	    });
	});
})();



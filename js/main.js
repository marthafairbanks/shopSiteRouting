(function() {
    'use strict';
    angular
        .module('shopSiteRouting', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {

	  	// $urlRouterProvider.otherwise("/");

	  	$stateProvider
        .state('home', {
          url: '/',
          views: {
              'main': {
                templateUrl: '../views/home.html',
                controller: 'HomeController',
                controllerAs: 'controller'
              },
            'header': {
                templateUrl: '../views/partials/header.html',
            },
            'footer': {
                templateUrl: '../views/partials/footer.html',
            },
          },
        });

      $stateProvider
        .state('categories', {
          url: '/categories',
          views: {
              'main': {
                templateUrl: '../views/categories.html',
                controller: 'CategoriesController',
                controllerAs: 'controller'
              },
            'header': {
                templateUrl: '../views/partials/header.html',
            },
            'footer': {
                templateUrl: '../views/partials/footer.html',
            },
          },
        });

        $stateProvider
        .state('categoriesItem', {
          url: '/categories:catid',
          views: {
              'main': {
                templateUrl: '../views/items.html',
                controller: 'CategoriesItemController',
                controllerAs: 'controller'
              },
            'header': {
                templateUrl: '../views/partials/header.html',
            },
            'footer': {
                templateUrl: '../views/partials/footer.html',
            },
          },
        });

      $stateProvider
        .state('items', {
          url: '/items',
          views: {
              'main': {
                templateUrl: '../views/items.html',
                controller: 'ItemsController',
                controllerAs: 'controller'
              },
            'header': {
                templateUrl: '../views/partials/header.html',
            },
            'footer': {
                templateUrl: '../views/partials/footer.html',
            },
          },
        });

      $stateProvider
        .state('details', {
          url: '/details:item',
          views: {
              'main': {
                templateUrl: '../views/details.html',
                controller: 'DetailsController',
                controllerAs: 'controller'
              },
            'header': {
                templateUrl: '../views/partials/header.html',
            },
            'footer': {
                templateUrl: '../views/partials/footer.html',
            },
          },
        });  
	});
})();



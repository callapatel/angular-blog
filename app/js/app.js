var blahgApp = angular.module('blahgApp', [
  'ui.router',
  'homeControllerModule'
  ]
);
//this was a dependency injection



blahgApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '../views/home.html',
  });
  $urlRouterProvider.otherwise('/home');
});

//passing a dependency parameters 

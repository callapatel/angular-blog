var blahgApp = angular.module('blahgApp', [
  'ui.router',
  'homeControllerModule'
  ]
);
//this was a dependency injection



blahgApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/home.html',
  });
  $urlRouterProvider.otherwise('/');
});

//passing a dependency parameters

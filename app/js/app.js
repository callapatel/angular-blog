var blahgApp = angular.module('blahgApp', [
  'ui.router',
  'homeControllerModule',
  'postsControllerModule'
  ]
);
//this was a dependency injection



blahgApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/home.html',
  })
  .state('posts', {
    url: '/posts',
    templateUrl: 'app/views/posts.html'
  });

  $urlRouterProvider.otherwise('/');
});

//passing a dependency parameters

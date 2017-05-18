myApp.config(function($stateProvider, $urlRouterProvider)
{
  $urlRouterProvider.otherwise("/user");
  $stateProvider
    .state('user', {
      url: '/user',
      templateUrl: 'views/user.html',
      controller:'userController'
    }).state('template', {
      url: '/template',
      templateUrl: 'views/template.html',
      controller :'templateController'
    })
});

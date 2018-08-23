var app = angular.module('ReaderApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/book', { 
      controller: 'BookshelfController', 
      templateUrl: 'views/bookshelf.html' 
    })
    .otherwise({ 
      redirectTo: '/books' 
    }); 
});
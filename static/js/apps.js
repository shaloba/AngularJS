var app = angular.module("RavensApp", ['ngRoute']);


app.config(function($routeProvider){
    $routeProvider
    .when('/teams',
    {
        templateUrl: "teams.html",
        controller: 'ravensCtrl'
    })
    .when('/404',
    {
        templateUrl: "404.html",
        controller: 'ravensCtrl'
    })
    .otherwise(
    {
        //template: '<div><STRONG>There is not page here</STRONG></div>'
        redirectTo: '404'
    })
});
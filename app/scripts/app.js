'use strict';

/**
 * @ngdoc overview
 * @name angularexerciseApp
 * @description
 * # angularexerciseApp
 *
 * Main module of the application.
 */
angular
    .module('angularexerciseApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/requests', {
                templateUrl: 'views/requests.html',
                controller: 'RequestsCtrl'
            })
            .when('/rewards', {
                templateUrl: 'views/rewards.html',
                controller: 'RewardsCtrl'
            })
            .when('/todo', {
                templateUrl: 'views/todo.html',
                controller: 'TodoCtrl'
            })
            .when('/events', {
                templateUrl: 'views/events.html',
                controller: 'EventsCtrl'
            })
            .when('/nominations', {
                templateUrl: 'views/todo.html',
                controller: 'NominationsCtrl'
            })
            .when('/profile', {
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
   $('.tab2').click(function() {
        $('#appear').hide();
    });

    $('.tab1').click(function() {
        $('#appear').show();
    });

    
define([
	'app',
	// Load Controllers here
	'controllers/app',
	'controllers/dashboard',
	'controllers/results',
	'controllers/detail',
	'controllers/home'
], function (app) {
	'use strict';
	// definition of routes
	app.config([
		'$stateProvider',
		'$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			// url routes/states
			//$urlRouterProvider.otherwise('dashboard');

			/*
			 $stateProvider
			 // app states
			 .state('dashboard', {
			 url: '/dashboard',
			 templateUrl: 'app/templates/dashboard.html',
			 controller: 'DashboardCtrl'
			 })
			 .state('home', {
			 url: '/home',
			 templateUrl: 'app/templates/home.html',
			 controller: 'HomeCtrl'
			 })
			 .state('results', {
			 url: '/results/:search/:satTrans/:wheelChair/:wheelChairLift',
			 controller: 'ResultsCtrl',
			 templateUrl: 'app/templates/results.html'
			 })
			 .state('detail', {
			 url: '/detail/:id',
			 controller: 'DetailCtrl',
			 templateUrl: 'app/templates/detail.html'
			 });
			 */
			$stateProvider

					// setup an abstract state for the tabs directive
					.state('home', {
						url: '/home',
						abstract: true,
						templateUrl: 'app/templates/home.html'
						//,controller: 'HomeCtrl'
					})

					// Each tab has its own nav history stack:

					.state('home.dashboard', {
						url: '/dashboard',
						views: {
							'home-dashboard': {
								templateUrl: 'app/templates/dashboard.html',
								controller: 'DashboardCtrl'
							}
						}
					})

					.state('home.harta', {
						url: '/harta',
						views: {
							'home-harta': {
								templateUrl: 'app/templates/harta.html',
								controller: 'HartaCtrl'
							}
						}
					})

					.state('home.results', {
						url: '/results/:search/:satTrans/:wheelChair/:wheelChairLift',
						views: {
							'home-dashboard': {
								templateUrl: 'app/templates/results.html',
								controller: 'ResultsCtrl'
							}
						}
					})

					.state('home.propune', {
						url: '/propune',
						views: {
							'home-propune': {
								templateUrl: 'app/templates/propune.html',
								controller: 'PropuneCtrl'
							}
						}
					});
			$urlRouterProvider.otherwise('/home/dashboard');
		}
	]);
});

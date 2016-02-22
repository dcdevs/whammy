// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('whammy', ['ionic', 'whammy.controllers', 'whammy.auth'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('access', {
    url: '/access',
    templateUrl: 'templates/access/login_tpl.html',
    controller: 'logInController'
  })

  .state('app', {
    url: '/app',
    templateUrl: 'templates/main.html',
    controller: 'AppCtrl'
  })

  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard/dashboard_tpl.html'
      }
    }
    //  controller: 'AppCtrl'
  })

  .state('app.account', {
    url: '/account',
    templateUrl: 'templates/account/account_tpl.html',
    controller: 'AppCtrl'
  })

  .state('app.balance', {
    url: '/balance',
    views: {
      'menuContent': {
        templateUrl: 'templates/balance/balance_tpl.html'
      }
    }
  })

  .state('app.transfer', {
    url: '/transfer',
    views: {
      'menuContent': {
        templateUrl: 'templates/transfer/transfer_tpl.html'
      }
    }
  })

  .state('app.favorites', {
    url: '/favorites',
    views: {
      'menuContent': {
        templateUrl: 'templates/favorites/favorites_tpl.html'
      }
    }
  })

  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings/settings_tpl.html'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/access');
});

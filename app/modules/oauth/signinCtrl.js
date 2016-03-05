angular.module('whammy.auth', [])
  .controller('logInController', ['$scope', '$ionicModal', '$state', function($scope, $ionicModal, $state) {

    $scope.doLogin = function() {

      $state.transitionTo('app.dashboard');

    };

  }])

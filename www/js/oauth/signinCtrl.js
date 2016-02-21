angular.module('whammy.auth', [])
  .controller('logInController', ['$scope', '$ionicModal','$state', function($scope, $ionicModal, $state) {

    $scope.doLogin = function() {

      $state.transitionTo('app.dashboard');


      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
     /* $timeout(function() {
        $scope.closeLogin();
      }, 1000);*/
    };




    /*// Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Perform the login action when the user submits the login form

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };
*/

  }])

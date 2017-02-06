angular
    .module('webapp', ['ngMaterial', 'ngMessages', 'ngResource'])
    .controller('DemoCtrl', ($scope, $http, $resource) => {
      $http({
        method : "GET",
        url : "https://api.punkapi.com/v2/beers"
      }).then((response) => {
        // if success
        $scope.myWelcome = response.data;
      }, (response) => {
        // if error
        $scope.myWelcome = response.statusText;
      });
    })
    .config(($mdThemingProvider) => {
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    });

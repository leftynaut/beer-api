angular
    .module('webapp', ['ngMaterial', 'ngMessages', 'ngResource'])
    .controller('AppCtrl', ($scope, $http, $resource) => {
      $http({
        method : "GET",
        url : "https://api.punkapi.com/v2/beers"
      }).then((response) => {
        // if success
        $scope.brewList = response.data;
      }, (response) => {
        // if error
        $scope.brewList = response.statusText;
      });
    })
    .config(($mdThemingProvider) => {
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    });

angular
    .module('webapp', ['ngMaterial', 'ngMessages', 'ngResource', 'md.data.table'])
    .controller('AppCtrl', ($scope, $http, $resource) => {
      $scope.selected = [];
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
      $scope.logBeer = (selection) => {
        console.log(`${selection.name} chosen`)
      }
    })
    .config(($mdThemingProvider) => {
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    });

angular
    .module('webapp', ['ngMaterial', 'ngMessages', 'ngResource', 'md.data.table'])
    .controller('AppCtrl', ($scope, $http, $mdDialog) => {
        $scope.selected = [];
        $http({
            method: "GET",
            url: "https://api.punkapi.com/v2/beers"
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
        $scope.popBeer = (selection) => {
            console.log(selection)
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title(selection.name)
                .textContent(selection.description)
                .ariaLabel('Alert Dialog Demo')
                .ok('Close')
                .targetEvent(selection)
            );
        }
    })
    .config(($mdThemingProvider) => {
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    });

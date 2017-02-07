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
            $mdDialog.show(
                $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('Error accessing the Brewdog API')
                .textContent('Check your internet connection and try again!')
                .ok('OK')
            );
        });
        $scope.popBeer = (selection) => {
            console.log(selection)
            $mdDialog.show(
                $mdDialog.alert()
                .clickOutsideToClose(true)
                .title(selection.name)
                .textContent(selection.description)
                .ok('CHEERS')
            );
        }
    })

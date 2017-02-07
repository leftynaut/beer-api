angular
    .module('webapp', ['ngMaterial', 'ngMessages', 'ngResource', 'ngSanitize', 'md.data.table'])
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
                // .clickOutsideToClose(true)
                .title('Error accessing the Brewdog API')
                .textContent('Check your internet connection and try again!')
            );
        });
        $scope.popBeer = (selection) => {
            // console.log(selection)
            $mdDialog.show(
                $mdDialog.alert()
                .clickOutsideToClose(true)
                .title(selection.name)
                .htmlContent(`<img class="beer-img" src=${selection.image_url}>${selection.description}<h4>Food Pairings</h4>
                  ${selection.food_pairing.map((food, idx, arr) => {
                  if (idx === arr.length - 1) {
                    return ` and ${food}`;
                  } else if (idx > 0){
                    return ` ${food}`;
                  } else {
                    return food;
                  }
                })}`)
                //.ok('CHEERS')
            );
        }
    })

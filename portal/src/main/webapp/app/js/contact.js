angular.module('app.contact', ['withub'])
    .config([
        '$stateProvider', '$urlRouterProvider'
        , function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('contact', {
                    url: "/contact",
                    templateUrl: "app/template/contact.html",
                    controller: 'ContactCtrl'
                })
        }
    ])
    .controller('ContactCtrl', [
        '$scope'
        , function ($scope) {


        }

    ])